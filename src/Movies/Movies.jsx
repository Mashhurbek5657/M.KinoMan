import React from 'react'
import Card from '../Conponit/Card'
import Img3 from '../Conponit/Vector 619.png'
import Img4 from '../Conponit/Vector (3).png'
import Img5 from '../Conponit/Indicators Container.png'
import Navbar from '../Conponit/Navbar'
import Img2 from '../Conponit/Rectangle 511 (Stroke).png'
import Img22 from '../Conponit/img1/Vector (7).png'
import Img33 from '../Conponit/img1/Vector (8).png'
import Img44 from '../Conponit/img1/Vector (9).png'
import Futer from '../Conponit/Futer'
import Start from '../Conponit/Start'

export default function Movies() {
    return (
        <div>
            <div className="wrappr">
                <div className="wrap">
                    <div className="h-screen w-[100%] mt-[100px] h-[700px] bg-[url('/src/Conponit/Container8.png')] bg-cover bg-cente">
                        <div className="contenr">
                            <div className="parent">
                                <div className=" mt-[500px]">
                                    <div className="cons">
                                        <div>
                                            <h1 className=' text-[40px]'>Avengers : Endgame</h1>
                                            <p>With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos's actions and undo the </p>
                                            <p>universe, no matter what consequences may be in store, and no matter who they face... Avenge the fallen.</p>
                                            <br />
                                            <div className="dsfa">
                                                <button className="bun2"><img src={Img2} alt="" /><p className=' -translate-y-6'>Play Now</p></button>
                                                <button className="buns"><img src={Img22} alt="" /></button>
                                                <button className="buns"><img src={Img33} alt="" /></button>
                                                <button className="buns"><img src={Img44} alt="" /></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="tek">
                        <div>
                            <h1 className=' text-[40px]'>Our Genres</h1>
                        </div>
                        <div>
                            <div className="buttons1">
                                <button className=' w-56 h-10 rounded-[8px] p-3 bg-[#1A1A1A]'><img src={Img3} alt="" /></button>
                                <img src={Img5} alt="" />
                                <button className=' w-56 h-10 rounded-[8px] p-3 bg-[#1A1A1A]'><img src={Img4} alt="" /></button>
                            </div>
                        </div>
                    </div>
                    <Card />
                    <Start />
                    <Futer />
                </div>
            </div>
        </div>
    )
}
