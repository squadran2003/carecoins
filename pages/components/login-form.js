"use client";

export default function LoginForm() {
    const validEmail = new RegExp(
        '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
      );
      function handelSubmit(e){
        e.preventDefault();
        const email = document.getElementById('email');
        if(email.value === '' || !validEmail.test(email.value)){
          document.getElementById('error').classList.remove('hidden');
          email.setAttribute('required', 'true');
        }else{
          email.removeAttribute('required');
          document.getElementById('error').classList.add('hidden');
        }
    }
    return (
        <form className="mt-8 space-y-6 md:ml-[25%] display:block" action="#" method="POST">
            <div className="mb-2">
                <label htmlFor="email" className="block text-sm/6 font-bold text-gray-900 mt-4">Email address <span className="text-red-500">*</span></label>
                <input type="email" id="email" name="email" placeholder="test@test.cop" className="w-full max-w-md px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 required:border-red-500"/>

            </div>
            <label id="error" className="hidden w-full max-w-md bg-[#ffe8e3] text-red-500 text-xs p-2 rounded-lg">Please enter a valid email address</label>
            <div>
                <label htmlFor="password" className="block text-sm/6 font-bold text-gray-900 mt-4">Password <span className="text-red-500">*</span></label>
                <input type="password" id="password" name="password" placeholder="********" className="w-full max-w-md px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 required:border-red-500" />
            </div>
            <input type="submit" onClick={handelSubmit} value="Sign in" className="w-full max-w-md px-4 mt-2 py-2 bg-[#fa8065] text-white font-bold rounded-lg shadow-sm focus:outline-none" />
        </form>
    )
}