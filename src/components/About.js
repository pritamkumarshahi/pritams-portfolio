export default function About() {
    return (
        <section id="about">
            <div className="container mx-auto flex px-100 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                    Hi, I'm Pritam.
                    <br className="hidden lg:inline-block" />I love to build amazing  apps specilized in MernStack.
                </h1>
                <p className="mb-8 leading-relaxed">
                    A User Interface (UI) Developer with 4+ years of experience specializing in user-centered design, application development, project management, and Scrum. A strong history of driving innovative approaches to UI development to deliver a dynamic user experience</p>
                <div className="flex justify-center">
                    <a
                    href="#contact"
                    className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                    Work With Me
                    </a>
                    <a
                    href="#projects"
                    className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                        My Work
                    </a>
                </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <img
                    className="object-cover object-center rounded"
                    alt="hero"
                    src="./pritam.png"
                />
                </div>
            </div>
        </section>
    )
}
