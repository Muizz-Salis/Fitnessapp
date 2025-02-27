import Navbar from "@/components/Navbar";

export default function ResetPassword() {
    return (
        <div className="min-h-screen bg-gray-900">
            {/* Navbar */}
            <Navbar />

            {/* Reset Password Form */}
            <div className="flex items-center justify-center pt-20">
                <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
                    <h2 className="text-3xl font-bold text-white text-center mb-4">FITZONE</h2>
                    <h1 className="text-2xl font-semibold text-white text-center mb-6">Reset Password</h1>

                    <form className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-300">New Password</label>
                            <input
                                type="password"
                                placeholder="Enter your new password"
                                className="mt-1 block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-300">Confirm New Password</label>
                            <input
                                type="password"
                                placeholder="Confirm your new password"
                                className="mt-1 block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            Reset Password
                        </button>

                        <p className="text-sm text-gray-400 text-center">
                            Don't have an account?{" "}
                            <a href="/signup" className="text-blue-500 hover:text-blue-400">
                                Sign Up
                            </a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}