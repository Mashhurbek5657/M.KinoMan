import React from 'react'
import Img17 from '../Conponit/img1/Vector (4).png'
import Img18 from '../Conponit/img1/Vector (5).png'
import Img19 from '../Conponit/img1/Vector (6).png'

export default function Futer() {
  return (
    <div>
      <footer className="fouter">
            <br />
            <br />
            <br />
            <div className="fonsc">
              <div className="teks">
                <div><h1 className=' text-[30px]'>Home</h1></div>
                <br />
                <p className=' text-[20px] text-[#999999]'>Categories</p>
                <p className=' text-[20px] text-[#999999]'>Devices</p>
                <p className=' text-[20px] text-[#999999]'>Pricing</p>
                <p className=' text-[20px] text-[#999999]'>FAQ</p>
              </div>
              <div className="teks">
                <div><h1 className=' text-[30px]'>Movies</h1></div>
                <br />
                <p className=' text-[20px] text-[#999999]'>Gernes</p>
                <p className=' text-[20px] text-[#999999]'>Trending</p>
                <p className=' text-[20px] text-[#999999]'>New Release</p>
                <p className=' text-[20px] text-[#999999]'>Popular</p>
              </div>
              <div className="teks">
                <div><h1 className=' text-[30px]'>Shows</h1></div>
                <br />
                <p className=' text-[20px] text-[#999999]'>Gernes</p>
                <p className=' text-[20px] text-[#999999]'>Trending</p>
                <p className=' text-[20px] text-[#999999]'>New Release</p>
                <p className=' text-[20px] text-[#999999]'>Popular</p>
              </div>
              <div className="teks">
                <div><h1 className=' text-[30px]'>Subscription</h1></div>
                <br />
                <p className=' text-[20px] text-[#999999]'>Plans</p>
                <p className=' text-[20px] text-[#999999]'>Features</p>
              </div>
              <div className="teks">
                <div><h1 className=' text-[30px]'>Connect With Us</h1></div>
                <br />
                <div className=" flex gap-5">
                  <button className='buns'><img src={Img17} alt="" /></button>
                  <button className='buns'><img src={Img18} alt="" /></button>
                  <button className='buns'><img src={Img19} alt="" /></button>
                </div>
              </div>
            </div>
            <br />
            <br />
            <hr />
            <div className="fouter-inner">
              <p>© 2025 StreamVibe. All rights reserved.</p>
              <p>Terms of Use | Privacy Policy | Cookie Policy</p>
            </div>
          </footer>
    </div>
  )
}
