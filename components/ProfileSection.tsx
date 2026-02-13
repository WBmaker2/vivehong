import { GraduationCap, Heart, Code } from "lucide-react";

const ProfileSection = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image Placeholder */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center overflow-hidden">
               <div className="text-purple-300 transform scale-[3]">
                  <GraduationCap size={100} />
               </div>
               {/* Overlay Decorative elements */}
               <div className="absolute top-8 left-8 p-4 bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-white/20">
                  <div className="flex items-center gap-2 text-purple-600 font-bold">
                    <Heart size={18} fill="currentColor" />
                    <span>진심을 담은 교육</span>
                  </div>
               </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-500 rounded-full mix-blend-multiply filter blur-2xl opacity-20"></div>
          </div>

          {/* Text Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              선생님의 시간이 가치 있게,<br />
              아이들의 배움이 즐겁게.
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              안녕하세요, 김홍년입니다. 저는 현직 초등학교 교사로서 교육 현장의 치열한 고민을 함께하고 있습니다. 
              기술은 단순히 도구가 아니라, 선생님께는 여유를 선물하고 학생들에게는 새로운 세계를 열어주는 열쇠가 되어야 한다고 믿습니다.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600">
                  <Code size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">업무 경감 프로그램 개발</h3>
                  <p className="text-gray-600">반복되는 행정 업무를 AI로 자동화하여 교육에 집중할 수 있는 환경을 만듭니다.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-pink-100 flex items-center justify-center text-pink-600">
                  <Sparkles size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">생성형 AI 활용 교육</h3>
                  <p className="text-gray-600">복잡한 기술 대신, 누구나 쉽게 활용할 수 있는 AI 실전 교수법을 강의합니다.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
