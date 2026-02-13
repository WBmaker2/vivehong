import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-purple-100 bg-purple-50 text-purple-600 text-sm font-medium mb-8 animate-fade-in">
          <Sparkles size={16} className="mr-2" />
          <span>미래 교육의 새로운 물결, 바이브 코딩</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
          <span className="block text-gray-900">바이브 코딩으로 여는</span>
          <span className="block bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent">
            미래 교육의 혁신
          </span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 mb-10">
          초등학교 교사 김홍년입니다. 생성형 AI와 코딩으로 선생님의 업무를 덜고,<br className="hidden md:block" />
          아이들의 무한한 잠재력을 깨우는 교육 프로그램을 연구합니다.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#contact"
            className="px-8 py-4 bg-purple-600 text-white rounded-xl font-bold text-lg hover:bg-purple-700 transition-all transform hover:scale-105 shadow-lg shadow-purple-200 flex items-center justify-center"
          >
            강의 문의하기
            <ArrowRight size={20} className="ml-2" />
          </a>
          <a
            href="#vibe"
            className="px-8 py-4 bg-white text-gray-700 border border-gray-200 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all"
          >
            더 알아보기
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
