import Link from "next/link";

export default function Cabecalho() {
  return (
    <header className='cabecalho'>
        <nav>
            <Link href="/" className="block py-7 hover:bg-white hover:bg-black font-extrabold">HOME</Link>
            <Link href="/produtos/mamao" className="block py-7 hover:bg-white hover:bg-black font-extrabold">MAMÃO</Link>
            <Link href="/produtos/melao" className="block py-7 hover:bg-white hover:bg-black font-extrabold">MELÃO</Link>
            <Link href="/produtos/manga" className="block py-7 hover:bg-white hover:bg-black font-extrabold">MANGA</Link>
        </nav>
    </header>
  )
}