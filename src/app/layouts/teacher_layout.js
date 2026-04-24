import Link from 'next/link'

function TeacherLayout ({children}) {
    return (
        
        <div classname="text-6xl">
            <h1>This is the Teacher Layout</h1>
                <nav>
                    <Link href="/" className="px-8">Home</Link>
                    <Link href="/login" className="px-8">Login</Link>
                    <Link href="/teacher" className="px-8">Course Instructor Page</Link>
                </nav>
        </div>
        
    );
}

export default TeacherLayout 
//rename to layout.js later//
