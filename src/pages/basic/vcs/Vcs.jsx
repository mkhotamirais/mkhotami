const Vcs = () => {
  return (
    <div>
      <div>vcs</div>
      <ul className="list-inside list-disc">
        <li>
          Git adalah salah satu VCS, oleh Linus Torvalds mengatur source code fleksibel, revisi, kolaborasi, sharing rekaman
          snapshot, bisa kembali ke perubahan sebelumnya,{" "}
          <a href="https://git-scm.com/" target="blank" rel="noopener">
            download git
          </a>{" "}
          git bash otomatis terinstal
        </li>
        <li>Ada 3 wilayah: Working Tree, Staging Area dan History</li>
        <li>git basic, git branch, git gui</li>
        <li>
          Mencatat dan trancking seluruh perubahan versi source code, kolaborasi open source; jenisnya github, gitlab,
          bitbucket
        </li>
        <li>tools: git, github, sourcetree, vscode, lightshoot, grepper, screen o matic, </li>
        <li>
          Gitbash command
          <pre>{`
git -v      // version
pwd         // print working directory
cd          // change directory
ls          // list
q           // keluar dari git log
mkdir       // make directory
mkdir new_dir               // buat direktori baru (folder baru)
cd new_dir                  // arahkan ke direktori (new_dir)
git init                    // ubah folder jadi repo (folder .git akan dibuat tapi hidden, untuk melihatnya di explorer view - hidden items - ceklis) file ini yang merekam semua perubahan

git config --list           // melihat list
git --list --show-origin
git config --global user.name ['your_username']     // jika diminta username
git config --global user.email['your_email']        // jika diminta email

git add [new_files]         // pindahkan file baru dari working tree ke staging area
[new_files] contoh . (semua file) index.html (hanya file index.html)
git status
git commit -m ['comment]    // pindahkan file di staging area ke history
git commit -am ['comment']  // memindah sekaligus dari wrking tree ke history dengan syarat hanya file yang berubah saja, tidak termsuk file baru
git config
git branch
git help
git log / git log -n        // melihat perubahan 3 terakhir
git log index.html          // melihat perubahan hanya pada file index.html
git log --oneline --graph
git checkout [5 five digit hash] [file-name]
git show [hash]
git checkhout [hash]
git clean -f    // delete file baru
git restore [file_name]     // unde perubahan di working tree
`}</pre>
        </li>
        <li>
          branching. Saat init folder maka file itu jadi branch master/main
          <pre>{`
// ketika folder di init maka otomatis menjadi branch master/main
// semua yang dilakukan di sutu branch tidak akan berefek pada branch lain
git branch              // melihat semua branch
git branch [new_branch]
git log
git log --all --decorate --oneline --graph  // membuat visualisasi tampilan baris (jika kepanjangan bisa pakai alias)
git config --global alias.graph log --all --decorate --oneline --graph   // alias cara 1
alias graph="log --all --decorate --oneline --graph"                     // alias cara 2
git checkout [branch_name]      // jika branch belum ada maka akan dibuat jika sudah ada maka akan pindah pointernya
git merge       // merge branch
git conflick    // terjadi jika ada konflik saat merge branch, karena file yang sama diubah di tempat yang sama.
`}</pre>
        </li>
      </ul>
    </div>
  );
};

export default Vcs;
