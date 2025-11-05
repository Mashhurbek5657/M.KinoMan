import Futer from '../../Conponit/Futer'
import Start from '../../Conponit/Start'
import Xa from '../img/Sub Container.png'

export default function Faqs() {
  return (
    <div>
      <div className="wrappr">
        <div className="wrap">
          <div className="cones">
            <div className="carda">
              <h1 className=' text-[35px]'>Welcome to our </h1>
              <h1 className=' text-[35px]'>support page!</h1>
              <p>We're here to help you with any problems you may be having with our product.</p>
              <br />
              <img src={Xa} alt="" />
            </div>
            <div className="carda2">
              <div className="inputsng">
                <div>
                  <h1 className=' text-[19px]'>First Name</h1>
                  <input className='inpun' type="email" placeholder='Enter First Name' />
                  <br />
                  <br />
                  <br />
                  <h1 className=' text-[19px]'>Email</h1>
                  <input className='inpun' type="email" placeholder='Enter your Email' />
                </div>
                <div>
                  <h1 className=' text-[19px]'>Last Name</h1>
                  <input className='inpun' type="email" placeholder='Enter Last Name' />
                  <br />
                  <br />
                  <br />
                  <h1 className=' text-[19px]'>Phone Number</h1>
                  <div className=" flex gap-9">
                    <select className="til">
                      <option>Eng</option>
                      <option>Uz</option>
                      <option>Ru</option>
                    </select>
                    <input className='inpunn' type="text" placeholder='Enter Phone Number' />
                  </div>
                </div>
              </div>
              <div className="Message">
                <h1 className=' text-[19px]'>Message</h1>
                <div className="diks">
                  <input className='inpune' type="text" placeholder='Enter your Message' />
                </div>
              </div>
              <div className=" flex items-center mt-10 gap-[220px]">
                <p>I agree with Terms of Use and Privacy Policy</p>
                <button className='buns1'>Send Message</button>
              </div>
            </div>
          </div>
          <div className="hunk">
            <div>
              <h1 className=' text-[30px]'>Frequently Asked Questions</h1>
              <p className=' text-[12px] text-[#999999]'>Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe.</p>
            </div>
            <button className='buns1'>Ask a Question</button>
          </div>
          <div className=" flex mt-20 gap-[150px]">
            <div>
              <div className=' flex gap-8'>
                <button className="buns">01</button>
                <div>
                  <h1>What is StreamVibe?</h1>
                  <p className=' text-[12px] text-[#999999]'>StreamVibe is a streaming service that allows you to watch movies and shows on demand.</p>
                </div>
                <h1 className=' text-[40px] cursor-pointer'>-</h1>
              </div>
              <br />
              <div className='bgs'></div>
              <br />
              <div className=' flex gap-[250px]'>
                <div className=' flex gap-8'>
                  <button className="buns">02</button>
                  <div>
                    <h1>How much does StreamVibe cost?</h1>
                  </div>
                </div>
                <h1 className=' text-[30px] cursor-pointer'>+</h1>
              </div>
              <br />
              <div className='bgs'></div>
              <br />
              <div className=' flex gap-[200px]'>
                <div className=' flex gap-8'>
                  <button className="buns">03</button>
                  <div>
                    <h1>What content is available on StreamVibe?</h1>
                  </div>
                </div>
                <h1 className=' text-[30px] cursor-pointer'>+</h1>
              </div>
              <br />
              <div className='bgs'></div>
              <br />
              <div className=' flex gap-[280px]'>
                <div className=' flex gap-8'>
                  <button className="buns">04</button>
                  <div>
                    <h1>How can I watch StreamVibe?</h1>
                  </div>
                </div>
                <h1 className=' text-[30px] cursor-pointer'>+</h1>
              </div>
            </div>
            <div>
              <div className=' flex gap-[280px]'>
                <div className=' flex gap-8'>
                  <button className="buns">05</button>
                  <div>
                    <h1>How do I sign up for StreamVibe?</h1>
                  </div>
                </div>
                <h1 className=' text-[30px] cursor-pointer'>+</h1>
              </div>
              <br />
              <div className='bgs'></div>
              <br />
              <div className=' flex gap-[280px]'>
                <div className=' flex gap-8'>
                  <button className="buns">06</button>
                  <div>
                    <h1>What is the StreamVibe free trial?</h1>
                  </div>
                </div>
                <h1 className=' text-[30px] cursor-pointer'>+</h1>
              </div>
              <br />
              <div className='bgs'></div>
              <br />
              <div className=' flex gap-[170px]'>
                <div className=' flex gap-8'>
                  <button className="buns">07</button>
                  <div>
                    <h1>How do I contact StreamVibe customer support?</h1>
                  </div>
                </div>
                <h1 className=' text-[30px] cursor-pointer'>+</h1>
              </div>
              <br />
              <div className='bgs'></div>
              <br />
              <div className=' flex gap-[197px]'>
                <div className=' flex gap-8'>
                  <button className="buns">08</button>
                  <div>
                    <h1>What are the StreamVibe payment methods?</h1>
                  </div>
                </div>
                <h1 className=' text-[30px] cursor-pointer'>+</h1>
              </div>
            </div>
          </div>
          <Start/>
          <Futer/>
        </div>
      </div>
    </div>
  )
}
