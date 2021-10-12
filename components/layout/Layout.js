import MainNavigation from './MainNavigation'
export default function Layout(props) {
  return (
    <div>
      <MainNavigation />
      <main className="container w-1/3 mx-auto mt-4">{props.children}</main>
    </div>
  )
}
