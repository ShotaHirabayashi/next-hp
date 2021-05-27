import Layout from '../components/Layot'
import Image from "next/image";
const Contact = () => {
    return (
        <Layout title="Contact">
            <div className="bg-white text-center shadow-xl p-8 w-80 rounded">
                <div className="mt4">
                <p className="fond-bold">Conatac info</p>
                </div>
            <div className='flex justify-center mt-4'>
                <Image
                    className="rounded-full"
                    src="/avatar.jpg"
                    width={60}
                    height={60}
                    alt="avatar"
                    />
            </div>
            <div className="mt-4">
                <p className="font-bold">Name</p>
                <p className="text-xs mt-2 text-gray-600">Hirabayashi</p>
                <p className="font-bold  mt-3">Address</p>
                <p className="text-xs mt-2 text-gray-600">Toshima</p>
                <p className="font-bold mt-3">Email</p>
                <p className="text-xs mt-2 text-gray-600">abn@gmail.com</p>
                <p className="font-bold mt-3">Phone</p>
                <p className="text-xs mt-2 text-gray-600">000-0000-0000</p>  
                
                </div>            

            </div>
        </Layout>
    )
}

export default Contact
