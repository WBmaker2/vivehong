import { Zap, Cpu, Users, Layers } from "lucide-react";

const FeatureCard = ({ icon: Icon, title, description, color }: { icon: any, title: string, description: string, color: string }) => (
  <div className="p-8 rounded-3xl bg-gray-50 hover:bg-white hover:shadow-xl hover:shadow-gray-200/50 transition-all border border-transparent hover:border-gray-100 group">
    <div className={`w-14 h-14 rounded-2xl ${color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
      <Icon size={28} className="text-white" />
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

const FeatureSection = () => {
  const features = [
    {
      icon: Zap,
      title: "바이브 코딩 (Vibe Coding)",
      description: "논리에만 갇힌 코딩이 아닌, 직관과 창의성을 극대화하여 결과물을 만들어내는 새로운 코딩 패러다임을 제안합니다.",
      color: "bg-purple-600"
    },
    {
      icon: Cpu,
      title: "생성형 AI 교실 혁명",
      description: "ChatGPT, Claude 등 최신 AI를 교실 수업과 행정 업무에 즉각 도입할 수 있는 실질적인 가이드를 제공합니다.",
      color: "bg-pink-500"
    },
    {
      icon: Users,
      title: "맞춤형 교사 연수",
      description: "선생님들의 수준과 필요에 맞춘 단계별 워크숍을 통해 AI 리터러시를 높이고 실무 역량을 강화합니다.",
      color: "bg-blue-500"
    },
    {
      icon: Layers,
      title: "교육용 솔루션 기획",
      description: "학생들의 흥미를 유발하고 교육적 효과를 높일 수 있는 다양한 교육용 웹 서비스와 앱을 기획하고 개발합니다.",
      color: "bg-indigo-600"
    }
  ];

  return (
    <section id="vibe" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">핵심 전문성</h2>
          <p className="text-lg text-gray-600">이론보다 실천, 기술보다 가치에 집중합니다.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
