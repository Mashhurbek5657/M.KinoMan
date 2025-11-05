import { Link, Outlet } from "react-router-dom";

export default function AboutPage() {
  return (
    <div className="wrappr">
      <div className="wrap">
        <div className="w-full h-screen">
          <div className="flex gap-3 items-center mt-[120px] flex justify-center">
            <Link to={`/support/faqs`}>
              <button className="buts">Contact</button>
            </Link>
            <Link to={`/support/about-contact`}>
              <button className="buts">Obuna</button>
            </Link>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  )
}
