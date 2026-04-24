import Link from 'next/link'


function StudentLayout ({children}) {
    return (
        
        <div classname="text-6xl text-center">
            <h1>This is the Student Layout</h1>
            <nav>
                <Link href="/" className="px-8">Home</Link>
                <Link href="/login" className="px-8">Login</Link>
                <Link href="/student" className="px-8">Student Page</Link>
            </nav>
        
        
        
        </div>

        
    );
}

export default StudentLayout 


//rename to layout.js later//