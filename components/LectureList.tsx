import { Calendar, MapPin, CheckCircle2 } from "lucide-react";

const LectureList = () => {
  const lectures = [
    {
      title: "선생님을 위한 AI 실전 업무 자동화",
      tags: ["업무경감", "AI 활용"],
      description: "나이스(NEIS) 기초 작업부터 공문 작성 보조까지, AI로 퇴근 시간을 앞당기는 비법을 공개합니다."
    },
    {
      title: "바이브 코딩: 코딩 교육의 새로운 패러다임",
      tags: ["학생 교육", "창의성"],
      description: "어려운 문법 대신, 아이들이 직접 필요한 앱을 만들어보는 프로젝트 중심의 코딩 수업입니다."
    },
    {
      title: "생성형 AI와 함께하는 창의적 수업 설계",
      tags: ["수업 혁신", "AI 리터러시"],
      description: "단 10분 만에 1주일치 수업 계획안과 학습지를 제작하는 효과적인 프롬프트 엔지니어링 강의입니다."
    }
  ];

  return (
    <section id="lectures" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">강의 및 워크숍</h2>
            <p className="text-lg text-gray-600">전국의 학교와 교육청에서 진행되는 주요 강의 커리큘럼입니다.</p>
          </div>
          <div className="flex items-center gap-2 text-purple-600 font-bold bg-purple-50 px-4 py-2 rounded-lg border border-purple-100">
            <Calendar size={20} />
            <span>2024년 강의 예약 중</span>
          </div>
        </div>

        <div className="grid gap-6">
          {lectures.map((lecture, index) => (
            <div key={index} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {lecture.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">#{tag}</span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{lecture.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">{lecture.description}</p>
              </div>
              <div className="w-full md:w-auto flex-shrink-0">
                <button className="w-full px-6 py-3 bg-gray-900 text-white rounded-xl font-bold hover:bg-gray-800 transition-colors">
                  상세 커리큘럼 보기
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-purple-600 to-pink-500 rounded-3xl p-10 text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-2">찾아가는 연수 및 특강</h3>
            <p className="text-purple-50 opacity-90">선생님들의 요구사항에 맞춰 커리큘럼을 재구성해 드립니다.</p>
          </div>
          <a href="#contact" className="px-8 py-4 bg-white text-purple-600 rounded-xl font-bold hover:bg-purple-50 transition-colors whitespace-nowrap">
            강의 요청하기
          </a>
        </div>
      </div>
    </section>
  );
};

export default LectureList;
