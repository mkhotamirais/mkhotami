import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clearAll } from "../../../app/client-app/siskoSlice";

const SiskoCheckout = () => {
  const dispatch = useDispatch();
  const [prov1, setProv1] = useState([]);
  const [idProv1, setIdProv1] = useState("");
  const [city1, setCity1] = useState([]);
  const [idCity1, setIdCity1] = useState("");
  const [district1, setDistrict1] = useState([]);
  const [idDistrict1, setIdDistrict1] = useState("");

  const [prov2, setProv2] = useState([]);
  const [idProv2, setIdProv2] = useState("");
  const [city2, setCity2] = useState([]);
  const [idCity2, setIdCity2] = useState("");
  const [district2, setDistrict2] = useState([]);
  const [idDistrict2, setIdDistrict2] = useState("");

  const { weight } = useSelector((state) => state.sisko);
  const [ongkir, setOngkir] = useState([]);
  const [loadOngkir, setLoadOngkir] = useState(true);
  const [errOngkir, setErrOngkir] = useState(null);

  useEffect(() => {
    axios.get(`https://demo.sistemtoko.com/province`).then((res) => setProv1(res.data));
    if (idProv1) axios.get(`https://demo.sistemtoko.com/city/${idProv1}`).then((res) => setCity1(res.data));
    if (idProv1 && idCity1)
      axios.get(`https://demo.sistemtoko.com/subdistrict?id=${idCity1}`).then((res) => setDistrict1(res.data));

    if (idProv1 && idCity1 && idDistrict1)
      axios.get(`https://demo.sistemtoko.com/province`).then((res) => setProv2(res.data));
    if (idProv1 && idCity1 && idDistrict1 && idProv2)
      axios.get(`https://demo.sistemtoko.com/city/${idProv2}`).then((res) => setCity2(res.data));
    if (idProv1 && idCity1 && idDistrict1 && idProv2 && idCity2)
      axios.get(`https://demo.sistemtoko.com/subdistrict?id=${idCity2}`).then((res) => setDistrict2(res.data));

    if (weight && idDistrict1 && idDistrict2)
      axios
        .get(`https://demo.sistemtoko.com/ongkir?id=${idDistrict1}&destination=${idDistrict2}&weight=${weight}`)
        .then((res) => {
          setLoadOngkir(false);
          if (res?.data?.status == false) setErrOngkir(res?.data?.msg);
          else setOngkir(res?.data?.data[0]?.costs);
        });
  }, [idProv1, idCity1, idDistrict1, idProv2, idCity2, idDistrict2, weight]);

  useEffect(() => {
    if (!idProv1 || idProv1 == "") {
      setIdCity1("");
      setCity1([]);
    }
    if (!idCity1 || idCity1 == "") {
      setIdDistrict1("");
      setDistrict1([]);
    }
    if (!idDistrict1 || idDistrict1 == "") {
      setIdProv2("");
      setProv2([]);
    }
    if (!idProv2 || idProv2 == "") {
      setIdCity2("");
      setCity2([]);
    }
    if (!idCity2 || idCity2 == "") {
      setIdDistrict2("");
      setDistrict2([]);
    }
  }, [idProv1, idCity1, idDistrict1, idProv2, idCity2]);

  return (
    <div>
      <h3 className="text-lg my-2">Set destination to get delivery fee</h3>
      <div className="flex gap-2 flex-col lg:flex-row">
        <div className="flex-1 gap-2 flex flex-col">
          <h4 className="font-semibold">From</h4>
          <Select id="prov1" value={idProv1} onChange={(e) => setIdProv1(e.target.value)}>
            <option value="">--select province</option>
            {prov1.map((item) => (
              <option key={item?.province_id} value={item?.province_id}>
                {item?.province}
              </option>
            ))}
          </Select>
          <Select id="city1" value={idCity1} onChange={(e) => setIdCity1(e.target.value)}>
            <option value="">--select city</option>
            {city1?.map((item) => (
              <option key={item?.city_id} value={item?.city_id}>
                {item?.city_name}
              </option>
            ))}
          </Select>
          <Select id="district1" value={idDistrict1} onChange={(e) => setIdDistrict1(e.target.value)}>
            <option value="">--select district</option>
            {district1?.map((item, i) => (
              <option key={i} value={item?.subdistrict_id}>
                {item?.subdistrict_name}
              </option>
            ))}
          </Select>
        </div>
        <div className="flex-1 gap-2 flex flex-col">
          <h4 className="font-semibold">To</h4>
          <Select id="prov2" value={idProv2} onChange={(e) => setIdProv2(e.target.value)}>
            <option value="">--select province</option>
            {prov2.map((item) => (
              <option key={item?.province_id} value={item?.province_id}>
                {item?.province}
              </option>
            ))}
          </Select>
          <Select id="city2" value={idCity2} onChange={(e) => setIdCity2(e.target.value)}>
            <option value="">--select city</option>
            {city2?.map((item) => (
              <option key={item?.city_id} value={item?.city_id}>
                {item?.city_name}
              </option>
            ))}
          </Select>
          <Select id="district2" value={idDistrict2} onChange={(e) => setIdDistrict2(e.target.value)}>
            <option value="">--select district</option>
            {district2?.map((item, i) => (
              <option key={i} value={item?.subdistrict_id}>
                {item?.subdistrict_name}
              </option>
            ))}
          </Select>
        </div>
      </div>
      {idDistrict2 && (
        <>
          <h3 className="text-lg my-2">Choose delivery fee</h3>
          {errOngkir ? (
            <div className="text-red-500 italic">{errOngkir}</div>
          ) : (
            <>
              <Select id="weight" className={" w-full"}>
                {loadOngkir ? (
                  <option>Loading...</option>
                ) : (
                  <>
                    <option value="">--Select ongkir</option>
                    {ongkir.map((ong, i) => (
                      <option key={i} value={ong?.costs?.value}>
                        {ong?.service} - {ong?.description} - {ong?.cost[0]?.value}
                      </option>
                    ))}
                  </>
                )}
              </Select>
              <br />
              <Link
                onClick={() => dispatch(clearAll())}
                to="../invoice"
                className="inline-block mt-3 bg-cyan-500 rounded p-1 px-2 text-white"
              >
                Order
              </Link>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default SiskoCheckout;

const Select = ({ children = "Select", id, value, onChange, className }) => {
  const { dark } = useSelector((state) => state.basic);
  return (
    <select
      name={id}
      id={id}
      value={value}
      onChange={onChange}
      className={`${className} border rounded p-2 focus:outline-none ${dark ? "bg-slate-800" : "bg-white"}`}
    >
      {children}
    </select>
  );
};
Select.propTypes;
