import React from 'react'
import Img11 from '../Conponit/img1/Icon.png'
import Img12 from '../Conponit/img1/Icon (1).png'
import Img13 from '../Conponit/img1/Icon (2).png'
import Img14 from '../Conponit/img1/Icon (3).png'
import Img15 from '../Conponit/img1/Frame.png'
import Img16 from '../Conponit/img1/Icon (4).png'

export default function Retng() {
    return (
        <div>
            <div className=' mt-20'>
                <div className=' w-[1100px]'>
                    <h1 className=' text-[30px]'>We Provide you streaming experience across various devices.</h1>
                    <p>With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed to be compatible with a wide range of devices, ensuring that you never miss a moment of entertainment.</p>
                </div>
                <div className="vin">
                    <div className="card2">
                        <div className=' flex items-center gap-[15px]'>
                            <div className="buns"><img src={Img11} alt="" /></div>
                            <h1>Smartphones</h1>
                        </div>
                        <br />
                        <br />
                        <p className=' text-[#999999]'>StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store</p>
                    </div>
                    <div className="card2">
                        <div className=' flex items-center gap-[15px]'>
                            <div className="buns"><img src={Img12} alt="" /></div>
                            <h1>Tablet</h1>
                        </div>
                        <br />
                        <br />
                        <p className=' text-[#999999]'>StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store</p>
                    </div>
                    <div className="card2">
                        <div className=' flex items-center gap-[15px]'>
                            <div className="buns"><img src={Img13} alt="" /></div>
                            <h1>Smart TV</h1>
                        </div>
                        <br />
                        <br />
                        <p className=' text-[#999999]'>StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store</p>
                    </div>
                    <div className="card2">
                        <div className=' flex items-center gap-[15px]'>
                            <div className="buns"><img src={Img14} alt="" /></div>
                            <h1>Laptops</h1>
                        </div>
                        <br />
                        <br />
                        <p className=' text-[#999999]'>StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store</p>
                    </div>
                    <div className="card2">
                        <div className=' flex items-center gap-[15px]'>
                            <div className="buns"><img src={Img15} alt="" /></div>
                            <h1>Gaming Consoles</h1>
                        </div>
                        <br />
                        <br />
                        <p className=' text-[#999999]'>StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store</p>
                    </div>
                    <div className="card2">
                        <div className=' flex items-center gap-[15px]'>
                            <div className="buns"><img src={Img16} alt="" /></div>
                            <h1>VR Headsets </h1>
                        </div>
                        <br />
                        <br />
                        <p className=' text-[#999999]'>StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
