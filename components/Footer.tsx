import { Mail, Instagram, Youtube, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-white border-t border-gray-100 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">함께 고민하고<br />성장하고 싶습니다.</h2>
            <p className="text-lg text-gray-600 mb-8">
              강의 요청, 프로그램 개발 협업, 또는 단순한 커피 챗도 환영합니다.<br />
              선생님들과의 대화는 언제나 새로운 영감을 줍니다.
            </p>
            <div className="space-y-4">
              <a href="mailto:contact@example.com" className="flex items-center gap-3 text-gray-700 hover:text-purple-600 transition-colors">
                <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center">
                  <Mail size={20} />
                </div>
                <span className="text-lg">contact@example.com</span>
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold text-gray-900 mb-6">바로가기</h4>
              <ul className="space-y-4 text-gray-600">
                <li><a href="#about" className="hover:text-purple-600">선생님 소개</a></li>
                <li><a href="#vibe" className="hover:text-purple-600">바이브 코딩</a></li>
                <li><a href="#lectures" className="hover:text-purple-600">강의 안내</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-6">소셜 미디어</h4>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-center gap-2"><Youtube size={18} /><a href="#" className="hover:text-purple-600">YouTube</a></li>
                <li className="flex items-center gap-2"><Instagram size={18} /><a href="#" className="hover:text-purple-600">Instagram</a></li>
                <li className="flex items-center gap-2"><Globe size={18} /><a href="#" className="hover:text-purple-600">Blog</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500">© 2026 Kim Hong-nyeon. All rights reserved.</p>
          <p className="text-gray-400 text-sm">Design with Vibe & AI</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
