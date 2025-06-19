import Navbar from "@/components/Navbar";


export default function ForgotPassword() {
    return (
        
        <div className="min-h-screen">
            {/* Navbar */}
            <Navbar />

            {/* Forgot Password Form */}
            <div className="flex items-center justify-center pt-20">
                <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
                    <h2 className="text-3xl font-bold text-white text-center mb-4">FITZONE</h2>
                    <h1 className="text-2xl font-semibold text-white text-center mb-6">Forgot Password</h1>

                    <form className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-300">Email Address</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="mt-1 block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full py-2 px-4 bg-[#EC7807] text-white font-semibold rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        >
                            Send Reset Link
                        </button>

                        <p className="text-sm text-gray-400 text-center">
                            Remember your password?{" "}
                            <a href="/login" className="text-blue-500 hover:text-blue-400">
                                Login
                            </a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}