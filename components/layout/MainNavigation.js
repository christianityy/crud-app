import Link from 'next/link'
export default function MainNavigation() {
  return (
    <header className="w-full h-20 flex items-center justify-between bg-gray-500 pr-0 pl-6">
      <div className="text-3xl text-white font-bold">
        <Link href="/">Home</Link>
      </div>
      <nav>
        <ul className="mr-5 p-0 flex list-none items-baseline">
          <li className="ml-12">
            <Link href="/person" exact>
              Persons List
            </Link>
          </li>
          <li className="ml-12">
            <Link href="/person/new" exact>
              Add New Person
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
