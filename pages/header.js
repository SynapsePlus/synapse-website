export default function Header() {
    return (
        <div className="sticky top-0 z-50 w-100 flex flex-col lg:flex-row lg:justify-between align-middle bg-gray-100 py-5 px-6 shadow-lg">
            <div className="text-3xl lg:text-4xl text-bold mx-auto pb-5 lg:pb-0">
                SYNAPSE<span className="font-bold text-indigo-600">+</span>
            </div>
            <div className="flex inline-block align-middle text-teal-800 text-md mx-auto">
                <a className="pr-5">About</a>
                <a className="pr-5">Mission</a>
                <a className="pr-5">Vision</a>
                <a className="pr-5">Who are we</a>
            </div>
        </div>
    )
};
