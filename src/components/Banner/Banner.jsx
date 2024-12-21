import './banner.css'
import arrow from '../../assets/arrow.png'
import { IoMdStar } from "react-icons/io";

const Banner = () => {
    return (
        <section className="my-[50px]">
            <div className="container">
                <div className="mx-auto h-[760px] w-[760px] border-[5px] border-[#f83949]">
                    <div className="h-[750px] w-[750px]">
                        {/*~~~~~ Top Part Start ~~~~~*/}
                        <div className="part">
                            <div className="red_box">
                                <div className="red_box_middle">
                                    <div className="red_logo shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"></div>
                                    <div className="red_logo shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"></div>
                                    <div className="red_logo shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"></div>
                                    <div className="red_logo shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"></div>
                                </div>
                            </div>
                            <div className="part_one_middle">
                                <div className="row relative">
                                    <div className="col_r1"></div>
                                    <div className="col_r1"></div>
                                    <div className="col_r1">
                                        <IoMdStar className='w-8 h-8 mx-auto my-[6px] text-[#15792a]' />
                                    </div>
                                    <div className="col_r1"></div>
                                    <div className="col_r1"></div>
                                    <div className="col_r1"></div>
                                    <div className="absolute top-[20px] left-[20px]">
                                        <img src={arrow} alt="" className='w-[200px] h-[100px] scale-125' />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col_r1"></div>
                                    <div className="col_r1 col_green"></div>
                                    <div className="col_r1 col_green"></div>
                                    <div className="col_r1 col_green"></div>
                                    <div className="col_r1 col_green"></div>
                                    <div className="col_r1 col_green"></div>
                                </div>
                                <div className="row">
                                    <div className="col_r1"></div>
                                    <div className="col_r1 col_green">
                                        <IoMdStar className='w-8 h-8 mx-auto my-[6px] text-yellow-50' />
                                    </div>
                                    <div className="col_r1"></div>
                                    <div className="col_r1"></div>
                                    <div className="col_r1"></div>
                                    <div className="col_r1"></div>
                                </div>
                            </div>
                            <div className="green_box">
                                <div className="green_box_middle">
                                    <div className="green_logo shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"></div>
                                    <div className="green_logo shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"></div>
                                    <div className="green_logo shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"></div>
                                    <div className="green_logo shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"></div>
                                </div>
                            </div>
                        </div>
                        {/*~~~~~ Top Part End ~~~~~*/}
                        {/*~~~~~ Middle Part Start ~~~~~*/}
                        <div className="middle">
                            <div className="middle_part">
                                <div className="mid_row">
                                    <div className="middle_row"></div>
                                    <div className="middle_row col_red">
                                        <IoMdStar className='w-8 h-8 mx-auto my-[6px] text-yellow-50' />
                                    </div>
                                    <div className="middle_row"></div>
                                    <div className="middle_row"></div>
                                    <div className="middle_row"></div>
                                    <div className="middle_row"></div>
                                </div>
                                <div className="mid_row">
                                    <div className="middle_row"></div>
                                    <div className="middle_row col_red"></div>
                                    <div className="middle_row col_red"></div>
                                    <div className="middle_row col_red"></div>
                                    <div className="middle_row col_red"></div>
                                    <div className="middle_row col_red"></div>
                                </div>
                                <div className="mid_row">
                                    <div className="middle_row"></div>
                                    <div className="middle_row"></div>
                                    <div className="middle_row">
                                        <IoMdStar className='w-8 h-8 mx-auto my-[6px] text-[#f12323]' />
                                    </div>
                                    <div className="middle_row"></div>
                                    <div className="middle_row"></div>
                                    <div className="middle_row"></div>
                                </div>
                            </div>
                            <div className="center_part shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]">
                                <div className="color ">
                                </div>
                            </div>
                            <div className="middle_part">
                                <div className="mid_row">
                                    <div className="middle_row"></div>
                                    <div className="middle_row"></div>
                                    <div className="middle_row"></div>
                                    <div className="middle_row">
                                        <IoMdStar className='w-8 h-8 mx-auto my-[6px] text-[#f8fc31]' />
                                    </div>
                                    <div className="middle_row"></div>
                                    <div className="middle_row"></div>
                                </div>
                                <div className="mid_row">
                                    <div className="middle_row col_yellow"></div>
                                    <div className="middle_row col_yellow"></div>
                                    <div className="middle_row col_yellow"></div>
                                    <div className="middle_row col_yellow"></div>
                                    <div className="middle_row col_yellow"></div>
                                    <div className="middle_row"></div>
                                </div>
                                <div className="mid_row">
                                    <div className="middle_row"></div>
                                    <div className="middle_row"></div>
                                    <div className="middle_row"></div>
                                    <div className="middle_row"></div>
                                    <div className="middle_row col_yellow">
                                        <IoMdStar className='w-8 h-8 mx-auto my-[6px] text-yellow-50' />
                                    </div>
                                    <div className="middle_row"></div>
                                </div>
                            </div>
                        </div>
                        {/*~~~~~ Middle Part End ~~~~~*/}
                        {/*~~~~~ Bottom Part Start ~~~~~*/}
                        <div className="part">
                            <div className="blue_box">
                                <div className="blue_box_middle">
                                    <div className="blue_logo shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"></div>
                                    <div className="blue_logo shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"></div>
                                    <div className="blue_logo shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"></div>
                                    <div className="blue_logo shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"></div>
                                </div>
                            </div>
                            <div className="part_one_middle">
                                <div className="row">
                                    <div className="col_r1"></div>
                                    <div className="col_r1"></div>
                                    <div className="col_r1"></div>
                                    <div className="col_r1"></div>
                                    <div className="col_r1 col_blue">
                                        <IoMdStar className='w-8 h-8 mx-auto my-[6px] text-yellow-50' />
                                    </div>
                                    <div className="col_r1"></div>
                                </div>
                                <div className="row">
                                    <div className="col_r1 col_blue"></div>
                                    <div className="col_r1 col_blue"></div>
                                    <div className="col_r1 col_blue"></div>
                                    <div className="col_r1 col_blue"></div>
                                    <div className="col_r1 col_blue"></div>
                                    <div className="col_r1"></div>
                                </div>
                                <div className="row">
                                    <div className="col_r1"></div>
                                    <div className="col_r1"></div>
                                    <div className="col_r1"></div>
                                    <div className="col_r1">
                                        <IoMdStar className='w-8 h-8 mx-auto my-[6px] text-[#071ef3]' />
                                    </div>
                                    <div className="col_r1"></div>
                                    <div className="col_r1"></div>
                                </div>
                            </div>
                            <div className="yellow_box">
                                <div className="yellow_box_middle">
                                    <div className="yellow_logo shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"></div>
                                    <div className="yellow_logo shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"></div>
                                    <div className="yellow_logo shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"></div>
                                    <div className="yellow_logo shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"></div>
                                </div>
                            </div>
                        </div>
                        {/*~~~~~ Bottom Part End ~~~~~*/}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner