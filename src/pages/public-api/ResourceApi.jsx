import { FaExternalLinkAlt } from "react-icons/fa";

const resourceApiList = [
  { href: "https://jsonplaceholder.typicode.com/", text: "jsonplaceholder" },
  { href: "https://fakestoreapi.com/", text: "fakestoreapi" },
  { href: "https://www.omdbapi.com/", text: "omdbapi" },
  { href: "https://newsapi.org/", text: "newsapi" },
  { href: "https://documenter.getpostman.com/view/966202/2s9Xy2PsAa#intro", text: "sisko" },
  { href: "https://any-api.com/", text: "anyapi" },
  { href: "https://github.com/public-apis/public-apis", text: "public-api-1" },
];

const ResourceApi = () => {
  return (
    <div>
      <div className="text-center text-lg my-3">Resource Api</div>
      <div className="flex justify-center gap-4 flex-wrap">
        {resourceApiList.map((item, i) => (
          <a
            key={i}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-cyan-500 flex gap-1"
          >
            {item.text}
            <FaExternalLinkAlt className="text-[0.5rem] translate-y-1" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default ResourceApi;
