import { IoIosBoat } from "react-icons/io";
import { IoWallet } from "react-icons/io5";
import { TbCirclePercentageFilled } from "react-icons/tb";
import { CiGift } from "react-icons/ci";


const InfoBox = () => {
    return (
        <div>
            <div>
                <div className="w-full bg-[#FF7043] text-white py-3">
                    <div className="w-11/12 md:w-10/12 mx-auto">
                        <div className="flex flex-col sm:flex-row items-center justify-between">

                            {/* Free Shipping */}
                            <div className="flex items-center gap-2 py-2">
                                <div className="text-2xl">
                                    <IoIosBoat className="text-black text-5xl" />
                                </div>
                                <div>
                                    <h3 className="font-medium text-white/60 text-sm">Free Shipping</h3>
                                    <p className="text-xs">Free shipping on all order</p>
                                </div>
                            </div>

                            {/* Money Return */}
                            <div className="flex items-center gap-2 py-2">
                                <div className="text-2xl">
                                    <IoWallet className="text-black text-5xl" />
                                </div>
                                <div>
                                    <h3 className="font-medium text-white/60 text-sm">Money Return</h3>
                                    <p className="text-xs">Back guarantee in 7 days</p>
                                </div>
                            </div>

                            {/* Member Discount */}
                            <div className="md:ml-0 ml-4 flex items-center gap-2 py-2">
                                <div className="text-2xl">
                                    <TbCirclePercentageFilled className="text-black text-5xl" />
                                </div>
                                <div>
                                    <h3 className="font-medium text-white/60 text-sm">Member Discount</h3>
                                    <p className="text-xs">On every order over $130.00</p>
                                </div>
                            </div>

                            {/* Special Gifts */}
                            <div className="md:mr-0 mr-8 flex items-center gap-2 py-2">
                                <div className="text-2xl">
                                    <CiGift className="text-black text-5xl" />
                                </div>
                                <div>
                                    <h3 className="font-medium text-white/60 text-sm">Special Gifts</h3>
                                    <p className="text-xs">Contact us Anytime</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoBox;