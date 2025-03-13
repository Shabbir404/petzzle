import { useState } from "react";
import aboutBannerPng from '../src/images/AboutBanner.jpeg'
import MoreProducts from "./MoreProducts";


const AProduct = () => {

    const [activeTab, setActiveTab] = useState('Description');

    const tabs = ['Description', 'Additional Information', 'Reviews(11)', 'Size Chart', 'Shipping & Return'];

    const features = [
        "Hair Remover: Perfect for large, short and cute-haired dogs, cats, horses, and other pets, grooming the hair quickly, gently, and effectively. The shedding hair sticks to the brush, making it easy to peel off and throw out when it's full.",
        "Clean & Convenient: The pet hair removal tools can help flatten the pet hair comb and give your pets a gentle massage without hurting their skin. Plus they're clean, easy to groom hair for much places like tail or face.",
        "User-friendly: Peel your pet's hair out, which would cause skin damage. Soft rubber micro-gentle massage and grooming without painful removing of fur or scratching the skin. Stainless steel will not rust and can be used for a long time.",
        "Directions: Place the grooming glove on your hand, carefully adjusting the wrist strap to ensure a comfortable fit. 2. Start grooming your pet with the rubber side. 3. When enough fur has been collected, you can easily peel it off the glove."
    ];

    const details = [
        {
            category: "TECHNICAL DETAILS", items: [
                { label: "Brand", value: "Mr.Fresh" },
                { label: "Manufacturer", value: "Cature Shield LLP, B-114 Sector-63, Noida-201301 (UP)" },
                { label: "Country of Origin", value: "China" },
                { label: "Item part number", value: "EP-HTR006-RED" },
                { label: "Product Dimensions", value: "20 x 11.5 x 3.5 cm; 75 Grams" },
                { label: "ASIN", value: "B09VH2QHKL" }
            ]
        },
        {
            category: "ADDITIONAL INFORMATION", items: [
                { label: "Manufacturer", value: "Cature Shield LLP, B-114 Sector-63, Noida-201301 (UP), YIWU MUJIMING IMP & EXP CO LTD.ADD NO 68216 4F 101 GATE DISTRICT 5 INTERNAT" },
                { label: "Packer", value: "Cature Shield LLP, B-114 Sector 63 Noida-201336 (UP)" },
                { label: "Importer", value: "Cature Shield LLP, B-114 Sector 63 Noida-201336 (UP)" },
                { label: "Item Weight", value: "75 g" },
                { label: "Item Dimensions", value: "LxWxH 20 x 11.5 x 3.5 Centimeters" },
                { label: "Net Quantity", value: "1.00 count" },
                { label: "Generic Name", value: "Plastic" }
            ]
        }
    ];
    return (
        <div>
            <div className="md:w-10/12 w-11/12 mx-auto bg-white rounded-lg shadow-md p-6">
                {/* Tab Navigation */}
                <div className="border-b border-gray-200">
                    <div className="flex overflow-x-auto">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                className={`px-4 py-2 text-sm font-medium ${activeTab === tab
                                    ? 'text-orange-500 border-b-2 border-orange-500'
                                    : '   hover: '
                                    }`}
                                onClick={() => setActiveTab(tab)}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Product Information */}
                <div className="mt-6">
                    <h2 className="text-xl font-bold   mb-4">About this item</h2>
                    <p className="font-semibold mb-4">
                        Pet Grooming Double-sided brushes are made from the best quality raw material, under strict quality standards and supervision. These brushes are specially designed for pet grooming requirements and are safe and cleaning and grooming pet hair coat.
                    </p>

                    <ul className="list-disc pl-5 font-semibold space-y-2   ">
                        {features.map((feature, index) => (
                            <li key={index} className="mb-2">{feature}</li>
                        ))}
                    </ul>

                    {/* Product Image */}
                    <div>
                        <img src={aboutBannerPng} alt="" />
                    </div>

                    {/* Technical Details */}
                    <div className=" mx-auto p-4 bg-white rounded-lg">
                        {details.map((section, index) => (
                            <div key={index} className="mb-4">
                                <h2 className="text-lg font-semibold text-[#FA6C41] pb-1 mb-2">{section.category}</h2>
                                <table className="w-full border-collapse border border-gray-200">
                                    <tbody>
                                        {section.items.map((item, idx) => (
                                            <tr key={idx} className={`border-b border-gray-200 ${idx % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}>
                                                <td className="p-2 font-medium text-gray-700 w-1/3">{item.label}</td>
                                                <td className="p-2 text-gray-600">{item.value}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <MoreProducts></MoreProducts>
        </div>
    );
};

export default AProduct;