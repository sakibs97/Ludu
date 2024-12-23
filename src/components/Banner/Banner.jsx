import './banner.css'
import { TiArrowDownThick, TiArrowRightThick, TiArrowUpThick, TiArrowLeftThick } from "react-icons/ti";
import { RiStarSmileFill } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";

const Banner = () => {
    return (
        <section className="my-[50px]">
            <div className="container">
                <div className="main_size">
                    <div className="all_button">
                        <div className="button_r">
                            <FaLocationDot className='icon_size' />
                            <button className='btn_text'>
                                Hello
                            </button>
                        </div>
                        <div className="button_g">
                            <button className='btn_text'>
                                Hello
                            </button>
                            <FaLocationDot className='icon_size' />
                        </div>
                    </div>
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
                                        <RiStarSmileFill className='icon_size icon_color_g' />
                                    </div>
                                    <div className="col_r1"></div>
                                    <div className="col_r1"></div>
                                    <div className="col_r1"></div>
                                </div>
                                <div className="row">
                                    <div className="col_r1">
                                        <TiArrowDownThick className='icon_size icon_color_g' />
                                    </div>
                                    <div className="col_r1 col_green"></div>
                                    <div className="col_r1 col_green"></div>
                                    <div className="col_r1 col_green"></div>
                                    <div className="col_r1 col_green"></div>
                                    <div className="col_r1 col_green"></div>
                                </div>
                                <div className="row">
                                    <div className="col_r1"></div>
                                    <div className="col_r1 col_green">
                                        <RiStarSmileFill className='icon_size' />
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
                                        <RiStarSmileFill className='icon_size' />
                                    </div>
                                    <div className="middle_row"></div>
                                    <div className="middle_row"></div>
                                    <div className="middle_row"></div>
                                    <div className="middle_row"></div>
                                </div>
                                <div className="mid_row">
                                    <div className="middle_row">
                                        <TiArrowRightThick className='icon_size icon_color_r' />
                                    </div>
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
                                        <RiStarSmileFill className='icon_size icon_color_r' />
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
                                        <RiStarSmileFill className='icon_size icon_color_y' />
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
                                    <div className="middle_row">
                                        <TiArrowLeftThick className='icon_size icon_color_y' />
                                    </div>
                                </div>
                                <div className="mid_row">
                                    <div className="middle_row"></div>
                                    <div className="middle_row"></div>
                                    <div className="middle_row"></div>
                                    <div className="middle_row"></div>
                                    <div className="middle_row col_yellow">
                                        <RiStarSmileFill className='icon_size' />
                                    </div>
                                    <div className="middle_row">

                                    </div>
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
                                        <RiStarSmileFill className='icon_size' />
                                    </div>
                                    <div className="col_r1"></div>
                                </div>
                                <div className="row">
                                    <div className="col_r1 col_blue"></div>
                                    <div className="col_r1 col_blue"></div>
                                    <div className="col_r1 col_blue"></div>
                                    <div className="col_r1 col_blue"></div>
                                    <div className="col_r1 col_blue"></div>
                                    <div className="col_r1">
                                        <TiArrowUpThick className='icon_size icon_color_b' />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col_r1"></div>
                                    <div className="col_r1"></div>
                                    <div className="col_r1"></div>
                                    <div className="col_r1">
                                        <RiStarSmileFill className='icon_size icon_color_b' />
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
                    <div className="all_button">
                        <div className="button_b">
                            <FaLocationDot className='icon_size' />
                            <button className='btn_text'>
                                Hello
                            </button>
                        </div>
                        <div className="button_y">
                            <button className='btn_text'>
                                Hello
                            </button>
                            <FaLocationDot className='icon_size' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner