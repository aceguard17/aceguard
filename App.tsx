import React, { useState, useEffect } from "react";
import {
  Phone,
  Mail,
  MessageSquare,
  Instagram,
  Youtube,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ShieldCheck,
  Users,
  Lock,
  Award,
  X,
  Globe,
  Settings,
  Save,
  Plus,
  Trash2,
  Image as ImageIcon,
  ExternalLink,
  Search,
  Layout,
  Type,
} from "lucide-react";

// --- Types & Initial Data ---

interface PortfolioCase {
  title: string;
  location: string;
  desc: string;
  img: string;
  year: string;
  images: string[];
  imageDetails: string[];
}

interface CreditItem {
  year: string;
  items: string[];
}

interface SiteData {
  seo: {
    title: string;
    description: string;
  };
  contact: {
    mainPhone: string;
    emergencyPhone: string;
    email: string;
    address: string;
    office: string;
    businessReg: string;
    owner: string;
  };
  cases: PortfolioCase[];
  credits: CreditItem[];
}

const INITIAL_DATA: SiteData = {
  seo: {
    title: "Ace Guard | 대한민국 1% 프리미엄 보안",
    description:
      "대한민국 1%를 위한 프리미엄 보안의 기준. 수년간의 현장 경험과 체계적인 교육 시스템을 통해 최상의 의전 서비스를 약속드립니다.",
  },
  contact: {
    mainPhone: "02-3018-9400",
    emergencyPhone: "010-2276-0258",
    email: "ssaura98@naver.com",
    address: "경기도 양평군 서종면 도장리 45-2",
    office: "서울특별시 용산구 효창원로 155",
    businessReg: "884-81-00576",
    owner: "이현석",
  },
  cases: [
    {
      title: "01. 국제 정상회의 (APEC)",
      location: "제주 / APEC",
      desc: "본행사, SOM1, SOM2, SOM3",
      img: "https://i.ifh.cc/o7J6Qd.jpg",
      year: "국가급 '보안'의 정수와 글로벌 프로토콜",
      images: [
        "https://i.ifh.cc/o7J6Qd.jpg",
        "https://i.ifh.cc/ZYRFfT.jpg",
        "https://i.ifh.cc/238LvD.jpg",
        "https://i.ifh.cc/B4KT9V.jpg",
      ],
      imageDetails: ["본행사", "SOM1", "SOM2", "SOM3"],
    },
    {
      title: "02. 축제 및 문화 페스티벌",
      location: "노원 / 안산 / 광명 / 전주 / 괴산 / 국악 / 과천",
      desc: "노원탈축제 / 안산거리축제 / 광명페스티벌 / 전주가맥축제 / 괴산축제 / 국악 축제 / 과천축제",
      img: "https://i.ifh.cc/k05okF.jpg",
      year: "대규모 인파 관리와 공공 안전 시스템",
      images: [
        "https://i.ifh.cc/k05okF.jpg",
        "https://i.ifh.cc/x2PzJd.jpg",
        "https://i.ifh.cc/LRyCPB.jpg",
        "https://i.ifh.cc/6n1xxW.jpg",
        "https://i.ifh.cc/xv3b9F.jpg",
        "https://i.ifh.cc/ZomYzl.jpg",
        "https://i.ifh.cc/Zy95Cb.jpg",
      ],
      imageDetails: [
        "노원탈축제",
        "안산거리축제",
        "광명페스티벌",
        "전주가맥축제",
        "괴산축제",
        "국악 축제",
        "과천축제",
      ],
    },
    {
      title: "03. 콘서트 & 월드투어",
      location: "SEOUL / WORLD TOUR",
      desc: "에일리 / 팬텀싱어 / 부활 / 불타는 트롯맨",
      img: "https://i.ifh.cc/YRS8vd.jpg",
      year: "역동적인 현장감과 아티스트 밀착 신변보호",
      images: [
        "https://i.ifh.cc/YRS8vd.jpg",
        "https://i.ifh.cc/GBANQ3.jpg",
        "https://i.ifh.cc/SCjkZO.jpg",
        "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=2070",
      ],
      imageDetails: ["에일리", "팬텀싱어", "부활", "불타는 트롯맨"],
    },
    {
      title: "04. 스포츠 & 팬미팅 & 행사경호",
      location: "SPORTS / EVENT / EXCLUSIVE",
      desc: "수원스타필드오프닝 / 신한동해오전 골프대회 / 전국노래자랑 / 송가인 팬미팅 / LPGA 선수권대회 / 인천포럼 / 평창올림픽 / 스포츠행사경호 / 새마을금고 열린음악회",
      img: "https://i.ifh.cc/Whlht7.jpg",
      year: "VIP 의전과 스포츠 특화 경호",
      images: [
        "https://i.ifh.cc/Whlht7.jpg",
        "https://i.ifh.cc/soT5cC.jpg",
        "https://i.ifh.cc/W8TAf9.jpg",
        "https://i.ifh.cc/GB18QW.jpg",
        "https://i.ifh.cc/R8G6Cr.jpg",
        "https://i.ifh.cc/G88KlB.jpg",
        "https://i.ifh.cc/9QtxF9.jpg",
        "https://i.ifh.cc/lHTTmk.jpg",
        "https://i.ifh.cc/yaVd1H.jpg",
      ],
      imageDetails: [
        "수원스타필드오프닝",
        "신한동해오픈 골프대회",
        "전국노래자랑",
        "송가인 팬미팅",
        "LPGA 선수권대회",
        "인천포럼",
        "평창올림픽",
        "스포츠행사경호",
        "새마을금고 열린음악회",
      ],
    },
    {
      title: "05. 기업 V.I.P 프로토콜",
      location: "KICCOF / Hanjin Kal / LG / MBN",
      desc: "KICCOF 행사 / 한진칼 주주총회 / LG 주주총회 / 전시장 및 박람회 / MBN Y 포럼 / 와인페스타 / 주주총회",
      img: "https://i.ifh.cc/naq5nM.jpg",
      year: "기업의 품격과 기밀 유지를 위한 철저한 보안",
      images: [
        "https://i.ifh.cc/naq5nM.jpg",
        "https://i.ifh.cc/wHZw2R.jpg",
        "https://i.ifh.cc/A7P7yL.jpg",
        "https://i.ifh.cc/twHVjF.jpg",
        "https://i.ifh.cc/AL61Gy.png",
        "https://i.ifh.cc/Os4kQk.jpg",
        "https://i.ifh.cc/DdZgpQ.jpg",
      ],
      imageDetails: [
        "KICCOF 행사",
        "한진칼 주주총회",
        "LG 주주총회",
        "전시장 및 박람회",
        "MBN Y 포럼",
        "와인페스타",
        "주주총회",
      ],
    },
    {
      title: "06. 프라이빗 신변보호",
      location: "PRIVATE / 1:1",
      desc: "1:1 전담 신변보호 서비스 / 시설보안 / 법정동행",
      img: "https://i.ifh.cc/8m0dBb.jpg",
      year: "전문 수행경호를 통해 고객의 품격을 높여드립니다",
      images: [
        "https://i.ifh.cc/8m0dBb.jpg",
        "https://i.ifh.cc/S5MpBt.jpg",
        "https://i.ifh.cc/5Nf2lq.jpg",
      ],
      imageDetails: ["1:1 전담 신변보호 서비스", "시설보안", "법정동행"],
    },
  ],
  credits: [
    {
      year: "2025",
      items: [
        "경주 APEC 보안 총괄",
        "혼다 코리아 신차 런칭쇼",
        "가수 송가인 전국투어 팬미팅",
        "LG전자 정기주주총회",
        "한진칼 정기주주총회",
      ],
    },
    {
      year: "2024",
      items: [
        "한국영화평론가협회상 시상식",
        "프라다 111주년 기념 익스클루시브 파티",
        "파리올림픽 양궁팀 금메달 축하 만찬",
        "아이폰16 국내 런칭 프라이빗 파티",
        "샤넬 뷰티 팝업스토어 보안",
      ],
    },
    {
      year: "2023",
      items: [
        "로보월드(ROBOWORLD) 전시 보안",
        "팬텀싱어4 전국투어 콘서트",
        "걸그룹 에스파(aespa) 공항 의전 경호",
        "배우 이도현 CF 촬영 현장 통제",
        "삼성 갤럭시 언팩 서울 세이프티",
      ],
    },
    {
      year: "2022",
      items: [
        "BTS 잠실 주경기장 콘서트 VIP 안전팀장",
        "넷플릭스 오리지널 드라마 촬영 보안",
        "스와치그룹 하이엔드 시큐리티 전시",
        "지스타(G-STAR) 메인 부스 안전 관리",
      ],
    },
    {
      year: "2018",
      items: [
        "평창 동계올림픽 전 구역 보안 총괄",
        "평창 올림픽 프레스센터 안전 질서 유지",
        "국제올림픽위원회(IOC) 위원 의전",
      ],
    },
  ],
};

// --- Admin Dashboard Component ---

const AdminDashboard = ({
  data,
  onSave,
  onClose,
}: {
  data: SiteData;
  onSave: (newData: SiteData) => void;
  onClose: () => void;
}) => {
  const [activeTab, setActiveTab] = useState<
    "portfolio" | "credits" | "settings" | "seo"
  >("portfolio");
  const [localData, setLocalData] = useState<SiteData>(data);

  const handleSave = () => {
    onSave(localData);
    alert("설정이 저장되었습니다.");
  };

  const updateCase = (idx: number, field: keyof PortfolioCase, value: any) => {
    const nextCases = [...localData.cases];
    nextCases[idx] = { ...nextCases[idx], [field]: value };
    setLocalData({ ...localData, cases: nextCases });
  };

  const addCase = () => {
    const newCase: PortfolioCase = {
      title: "신규 프로젝트",
      location: "장소 정보",
      desc: "설명 텍스트",
      img: "https://images.unsplash.com/photo-1514565131-fce0801e5785?q=80&w=2112",
      year: "요약 문구",
      images: [
        "https://images.unsplash.com/photo-1514565131-fce0801e5785?q=80&w=2112",
      ],
      imageDetails: ["상세 설명"],
    };
    setLocalData({ ...localData, cases: [...localData.cases, newCase] });
  };

  const deleteCase = (idx: number) => {
    if (confirm("정말 삭제하시겠습니까?")) {
      const nextCases = localData.cases.filter((_, i) => i !== idx);
      setLocalData({ ...localData, cases: nextCases });
    }
  };

  const addSubImage = (caseIdx: number) => {
    const nextCases = [...localData.cases];
    nextCases[caseIdx].images = [...nextCases[caseIdx].images, ""];
    nextCases[caseIdx].imageDetails = [
      ...nextCases[caseIdx].imageDetails,
      "상세 설명",
    ];
    setLocalData({ ...localData, cases: nextCases });
  };

  const updateSubImage = (caseIdx: number, imgIdx: number, value: string) => {
    const nextCases = [...localData.cases];
    nextCases[caseIdx].images[imgIdx] = value;
    setLocalData({ ...localData, cases: nextCases });
  };

  const updateSubImageDetail = (
    caseIdx: number,
    imgIdx: number,
    value: string,
  ) => {
    const nextCases = [...localData.cases];
    nextCases[caseIdx].imageDetails[imgIdx] = value;
    setLocalData({ ...localData, cases: nextCases });
  };

  const deleteSubImage = (caseIdx: number, imgIdx: number) => {
    const nextCases = [...localData.cases];
    nextCases[caseIdx].images = nextCases[caseIdx].images.filter(
      (_, i) => i !== imgIdx,
    );
    nextCases[caseIdx].imageDetails = nextCases[caseIdx].imageDetails.filter(
      (_, i) => i !== imgIdx,
    );
    setLocalData({ ...localData, cases: nextCases });
  };

  return (
    <div className="fixed inset-0 z-[2000] bg-[#020617] flex flex-col font-sans">
      <header className="bg-black border-b border-white/10 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#D4AF37] rounded-lg flex items-center justify-center text-black">
            <Settings size={24} />
          </div>
          <h1 className="text-xl font-bold tracking-tight text-white">
            ACE GUARD{" "}
            <span className="text-[#D4AF37] font-light">ADMIN PANEL</span>
          </h1>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={handleSave}
            className="flex items-center gap-2 bg-[#D4AF37] text-black px-5 py-2 rounded-md font-bold hover:brightness-110 transition-all text-sm"
          >
            <Save size={18} /> 저장하기
          </button>
          <button onClick={onClose} className="text-white/40 hover:text-white">
            <X size={28} />
          </button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        <nav className="w-64 bg-black border-r border-white/10 flex flex-col p-4 gap-2">
          <button
            onClick={() => setActiveTab("portfolio")}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${activeTab === "portfolio" ? "bg-[#D4AF37]/20 text-[#D4AF37]" : "text-white/40 hover:bg-white/5 hover:text-white"}`}
          >
            <Layout size={20} /> 실적 관리
          </button>
          <button
            onClick={() => setActiveTab("credits")}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${activeTab === "credits" ? "bg-[#D4AF37]/20 text-[#D4AF37]" : "text-white/40 hover:bg-white/5 hover:text-white"}`}
          >
            <ExternalLink size={20} /> 히스토리 관리
          </button>
          <button
            onClick={() => setActiveTab("settings")}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${activeTab === "settings" ? "bg-[#D4AF37]/20 text-[#D4AF37]" : "text-white/40 hover:bg-white/5 hover:text-white"}`}
          >
            <Type size={20} /> 기본 정보 관리
          </button>
          <button
            onClick={() => setActiveTab("seo")}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${activeTab === "seo" ? "bg-[#D4AF37]/20 text-[#D4AF37]" : "text-white/40 hover:bg-white/5 hover:text-white"}`}
          >
            <Search size={20} /> 검색엔진(SEO)
          </button>
        </nav>

        <main className="flex-1 overflow-y-auto bg-[#0a0f1d] p-8">
          {activeTab === "portfolio" && (
            <div className="space-y-8 animate-in fade-in duration-300">
              <div className="flex justify-between items-end mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">
                    수행 실적 관리
                  </h2>
                  <p className="text-white/40 text-sm">
                    랜딩페이지의 '주요 수행 실적' 섹션에 노출되는 데이터를
                    편집합니다.
                  </p>
                </div>
                <button
                  onClick={addCase}
                  className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded flex items-center gap-2 border border-white/5 transition-all"
                >
                  <Plus size={18} /> 실적 추가
                </button>
              </div>

              <div className="grid grid-cols-1 gap-8">
                {localData.cases.map((c, i) => (
                  <div
                    key={i}
                    className="bg-black/40 border border-white/10 rounded-xl overflow-hidden p-6 relative group"
                  >
                    <button
                      onClick={() => deleteCase(i)}
                      className="absolute top-6 right-6 text-white/20 hover:text-red-500 transition-colors z-10"
                    >
                      <Trash2 size={24} />
                    </button>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      <div className="col-span-1 space-y-6">
                        <div>
                          <label className="block text-[#D4AF37] text-[10px] uppercase font-bold mb-2 tracking-widest">
                            대표 이미지 (목록 노출)
                          </label>
                          <div className="aspect-video bg-neutral-900 rounded-lg overflow-hidden border border-white/10 relative">
                            <img
                              src={c.img}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <input
                            type="text"
                            value={c.img}
                            onChange={(e) =>
                              updateCase(i, "img", e.target.value)
                            }
                            className="w-full mt-3 bg-neutral-900 border border-white/10 p-2 text-xs text-white rounded focus:outline-none focus:border-[#D4AF37]"
                            placeholder="메인 이미지 URL"
                          />
                        </div>

                        <div className="space-y-4">
                          <div>
                            <label className="block text-white/30 text-[10px] uppercase font-bold mb-1">
                              제목
                            </label>
                            <input
                              type="text"
                              value={c.title}
                              onChange={(e) =>
                                updateCase(i, "title", e.target.value)
                              }
                              className="w-full bg-neutral-900 border border-white/10 p-2 text-white rounded focus:outline-none focus:border-[#D4AF37]"
                            />
                          </div>
                          <div>
                            <label className="block text-white/30 text-[10px] uppercase font-bold mb-1">
                              한줄 요약
                            </label>
                            <input
                              type="text"
                              value={c.year}
                              onChange={(e) =>
                                updateCase(i, "year", e.target.value)
                              }
                              className="w-full bg-neutral-900 border border-white/10 p-2 text-white rounded focus:outline-none focus:border-[#D4AF37]"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="col-span-2 space-y-4">
                        <div className="flex justify-between items-center mb-4">
                          <label className="block text-[#D4AF37] text-[10px] uppercase font-bold tracking-widest">
                            상세 이미지 리스트 (슬라이드)
                          </label>
                          <button
                            onClick={() => addSubImage(i)}
                            className="text-[10px] bg-white/5 hover:bg-white/10 text-white px-2 py-1 rounded border border-white/10 flex items-center gap-1 transition-all"
                          >
                            <Plus size={12} /> 이미지 추가
                          </button>
                        </div>

                        <div className="grid grid-cols-1 gap-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                          {c.images.map((subImg, subIdx) => (
                            <div
                              key={subIdx}
                              className="bg-neutral-900/50 border border-white/5 rounded-lg p-4 flex gap-4 items-start relative group/item"
                            >
                              <button
                                onClick={() => deleteSubImage(i, subIdx)}
                                className="absolute top-2 right-2 text-white/10 hover:text-red-500 opacity-0 group-hover/item:opacity-100 transition-all"
                              >
                                <X size={16} />
                              </button>

                              <div className="w-24 h-24 flex-shrink-0 bg-black rounded overflow-hidden border border-white/10">
                                <img
                                  src={subImg}
                                  className="w-full h-full object-cover"
                                />
                              </div>

                              <div className="flex-1 space-y-3">
                                <div>
                                  <label className="block text-[9px] text-white/20 uppercase mb-1">
                                    이미지 URL
                                  </label>
                                  <input
                                    type="text"
                                    value={subImg}
                                    onChange={(e) =>
                                      updateSubImage(i, subIdx, e.target.value)
                                    }
                                    className="w-full bg-black/40 border border-white/10 p-1.5 text-xs text-white rounded focus:outline-none focus:border-[#D4AF37]"
                                    placeholder="https://..."
                                  />
                                </div>
                                <div>
                                  <label className="block text-[9px] text-white/20 uppercase mb-1">
                                    이미지 설명
                                  </label>
                                  <input
                                    type="text"
                                    value={c.imageDetails[subIdx] || ""}
                                    onChange={(e) =>
                                      updateSubImageDetail(
                                        i,
                                        subIdx,
                                        e.target.value,
                                      )
                                    }
                                    className="w-full bg-black/40 border border-white/10 p-1.5 text-xs text-white rounded focus:outline-none focus:border-[#D4AF37]"
                                    placeholder="사진에 대한 설명을 입력하세요"
                                  />
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "credits" && (
            <div className="max-w-4xl animate-in slide-in-from-bottom-4 duration-400">
              <h2 className="text-2xl font-bold text-white mb-6">
                히스토리(엔딩 크레딧) 관리
              </h2>
              <div className="space-y-6">
                {localData.credits.map((group, i) => (
                  <div
                    key={i}
                    className="bg-black/40 border border-white/10 p-6 rounded-lg"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <input
                        type="text"
                        value={group.year}
                        onChange={(e) => {
                          const next = [...localData.credits];
                          next[i].year = e.target.value;
                          setLocalData({ ...localData, credits: next });
                        }}
                        className="bg-neutral-900 border border-white/10 p-2 text-white w-24 font-bold rounded focus:border-[#D4AF37] outline-none"
                      />
                      <span className="text-white/20">|</span>
                      <p className="text-white/40 text-xs">
                        해당 연도의 주요 실적 리스트입니다. (줄바꿈으로 구분)
                      </p>
                    </div>
                    <textarea
                      value={group.items.join("\n")}
                      onChange={(e) => {
                        const next = [...localData.credits];
                        next[i].items = e.target.value.split("\n");
                        setLocalData({ ...localData, credits: next });
                      }}
                      className="w-full h-40 bg-neutral-900 border border-white/10 p-4 text-white rounded focus:border-[#D4AF37] outline-none leading-relaxed"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "settings" && (
            <div className="max-w-2xl animate-in fade-in duration-300">
              <h2 className="text-2xl font-bold text-white mb-8">
                기본 정보 및 연락처 설정
              </h2>
              <div className="space-y-6 bg-black/40 p-8 border border-white/10 rounded-xl">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white/40 text-xs mb-2">
                      대표 전화
                    </label>
                    <input
                      type="text"
                      value={localData.contact.mainPhone}
                      onChange={(e) =>
                        setLocalData({
                          ...localData,
                          contact: {
                            ...localData.contact,
                            mainPhone: e.target.value,
                          },
                        })
                      }
                      className="w-full bg-neutral-900 border border-white/10 p-3 text-white rounded outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                  <div>
                    <label className="block text-white/40 text-xs mb-2">
                      긴급/야간 상담
                    </label>
                    <input
                      type="text"
                      value={localData.contact.emergencyPhone}
                      onChange={(e) =>
                        setLocalData({
                          ...localData,
                          contact: {
                            ...localData.contact,
                            emergencyPhone: e.target.value,
                          },
                        })
                      }
                      className="w-full bg-neutral-900 border border-white/10 p-3 text-white rounded outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-white/40 text-xs mb-2">
                    이메일
                  </label>
                  <input
                    type="text"
                    value={localData.contact.email}
                    onChange={(e) =>
                      setLocalData({
                        ...localData,
                        contact: {
                          ...localData.contact,
                          email: e.target.value,
                        },
                      })
                    }
                    className="w-full bg-neutral-900 border border-white/10 p-3 text-white rounded outline-none focus:border-[#D4AF37]"
                  />
                </div>
                <div>
                  <label className="block text-white/40 text-xs mb-2">
                    본사 주소
                  </label>
                  <input
                    type="text"
                    value={localData.contact.address}
                    onChange={(e) =>
                      setLocalData({
                        ...localData,
                        contact: {
                          ...localData.contact,
                          address: e.target.value,
                        },
                      })
                    }
                    className="w-full bg-neutral-900 border border-white/10 p-3 text-white rounded outline-none focus:border-[#D4AF37]"
                  />
                </div>
                <div>
                  <label className="block text-white/40 text-xs mb-2">
                    사무소 주소
                  </label>
                  <input
                    type="text"
                    value={localData.contact.office}
                    onChange={(e) =>
                      setLocalData({
                        ...localData,
                        contact: {
                          ...localData.contact,
                          office: e.target.value,
                        },
                      })
                    }
                    className="w-full bg-neutral-900 border border-white/10 p-3 text-white rounded outline-none focus:border-[#D4AF37]"
                  />
                </div>
                <div className="grid grid-cols-2 gap-6 pt-4 border-t border-white/10">
                  <div>
                    <label className="block text-white/40 text-xs mb-2">
                      사업자 번호
                    </label>
                    <input
                      type="text"
                      value={localData.contact.businessReg}
                      onChange={(e) =>
                        setLocalData({
                          ...localData,
                          contact: {
                            ...localData.contact,
                            businessReg: e.target.value,
                          },
                        })
                      }
                      className="w-full bg-neutral-900 border border-white/10 p-3 text-white rounded outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                  <div>
                    <label className="block text-white/40 text-xs mb-2">
                      대표자명
                    </label>
                    <input
                      type="text"
                      value={localData.contact.owner}
                      onChange={(e) =>
                        setLocalData({
                          ...localData,
                          contact: {
                            ...localData.contact,
                            owner: e.target.value,
                          },
                        })
                      }
                      className="w-full bg-neutral-900 border border-white/10 p-3 text-white rounded outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "seo" && (
            <div className="max-w-2xl animate-in zoom-in-95 duration-300">
              <h2 className="text-2xl font-bold text-white mb-8">
                검색엔진 최적화 (SEO) 설정
              </h2>
              <div className="bg-black/40 p-8 border border-white/10 rounded-xl space-y-6">
                <div>
                  <label className="block text-white/40 text-xs mb-2">
                    웹사이트 제목 (Title Tag)
                  </label>
                  <input
                    type="text"
                    value={localData.seo.title}
                    onChange={(e) =>
                      setLocalData({
                        ...localData,
                        seo: { ...localData.seo, title: e.target.value },
                      })
                    }
                    className="w-full bg-neutral-900 border border-white/10 p-3 text-white rounded outline-none focus:border-[#D4AF37]"
                  />
                  <p className="mt-2 text-[10px] text-white/20 italic">
                    브라우저 탭에 표시되는 제목이며 구글 검색 결과의 헤드라인이
                    됩니다.
                  </p>
                </div>
                <div>
                  <label className="block text-white/40 text-xs mb-2">
                    메타 설명 (Meta Description)
                  </label>
                  <textarea
                    value={localData.seo.description}
                    onChange={(e) =>
                      setLocalData({
                        ...localData,
                        seo: { ...localData.seo, description: e.target.value },
                      })
                    }
                    className="w-full h-32 bg-neutral-900 border border-white/10 p-3 text-white rounded outline-none focus:border-[#D4AF37]"
                  />
                  <p className="mt-2 text-[10px] text-white/20 italic">
                    검색 결과에서 제목 아래 표시되는 웹사이트 요약문입니다.
                  </p>
                </div>
              </div>

              <div className="mt-12 bg-blue-500/10 border border-blue-500/20 p-6 rounded-xl flex gap-4">
                <Globe className="text-blue-400 flex-shrink-0" size={24} />
                <div>
                  <h4 className="text-blue-400 font-bold text-sm mb-1">
                    SEO 팁
                  </h4>
                  <p className="text-white/60 text-xs leading-relaxed">
                    '프리미엄 경호', '개인 신변보호', '기업 주주총회 보안'과
                    같은 핵심 키워드를 제목과 설명에 자연스럽게 포함하면 검색
                    순위 노출에 유리합니다.
                  </p>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

// --- Sub-components (Main Website) ---

const VideoSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden md:overflow-hidden overflow-visible bg-black mobile-video-responsive">
      <div className="video-container">
        <iframe
          src="https://www.youtube.com/embed/Q8J32GSUdn4?autoplay=1&mute=1&loop=1&playlist=Q8J32GSUdn4&controls=0&showinfo=0&modestbranding=1&rel=0&enablejsapi=1"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          className="w-full h-full scale-125 md:scale-105"
        ></iframe>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#00050D]"></div>
      </div>
      <div className="absolute -bottom-16 md:bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center justify-center gap-2 animate-bounce">
        <span className="text-white/60 text-xs tracking-wider uppercase font-light">
          더 보기
        </span>
        <ChevronDown className="text-[#D4AF37] w-8 h-8" strokeWidth={1.5} />
      </div>
    </section>
  );
};

const ReputationSection = () => {
  return (
    <section className="py-16 md:py-32 px-4 bg-[#00050D] text-center border-b border-white/5">
      <div className="max-w-4xl mx-auto">
        <span className="text-[#D4AF37] text-xs md:text-sm tracking-[0.4em] font-cinzel mb-8 block uppercase">
          SUPREME REPUTATION
        </span>
        <h2 className="text-4xl md:text-6xl font-cinzel leading-tight mb-8">
          <span className="text-white">대한민국 </span>
          <span className="text-white font-black italic">1%</span>
          <span className="text-white">를 위한</span>
          <br />
          <span className="text-gold-gradient gold-glow font-bold">
            프리미엄 보안의 기준
          </span>
        </h2>
        <div className="w-16 h-[1px] bg-[#D4AF37]/40 mx-auto mb-10"></div>
        <div className="space-y-4">
          <p className="text-white/80 text-lg md:text-xl font-light leading-relaxed">
            에이스가드는 단순한 안전을 넘어 고객의 품격까지 생각합니다.
          </p>
          <p className="text-white/60 text-base md:text-lg font-light leading-relaxed">
            수년간의 현장 경험과 체계적인 교육 시스템을 통해 최상의 의전
            서비스를 약속드립니다.
          </p>
        </div>
      </div>
    </section>
  );
};

const PortfolioSection = ({ cases }: { cases: PortfolioCase[] }) => {
  const [activeProjectIndex, setActiveProjectIndex] = useState<number | null>(
    null,
  );
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const handleOpenModal = (idx: number) => {
    setActiveProjectIndex(idx);
    setActiveImageIndex(0);
  };

  const handleNextProject = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeProjectIndex === null) return;
    setActiveProjectIndex((prevIdx) => {
      if (prevIdx === null) return null;
      return (prevIdx + 1) % cases.length;
    });
    setActiveImageIndex(0);
  };

  const handlePrevProject = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeProjectIndex === null) return;
    setActiveProjectIndex((prevIdx) => {
      if (prevIdx === null) return null;
      return (prevIdx - 1 + cases.length) % cases.length;
    });
    setActiveImageIndex(0);
  };

  return (
    <section className="py-24 px-4 bg-[#00050D] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/5 blur-[120px] rounded-full"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16">
          <span className="text-[#D4AF37] tracking-widest text-sm uppercase">
            Elite Track Record
          </span>
          <h2 className="text-4xl md:text-5xl font-cinzel text-white mt-4">
            주요 수행 실적
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cases.map((item, idx) => (
            <div
              key={idx}
              onClick={() => handleOpenModal(idx)}
              className="group relative overflow-hidden aspect-video bg-neutral-900 border border-white/5 cursor-pointer"
            >
              <img
                src={item.img}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <span className="hidden md:block text-[#D4AF37] font-bold mb-2">
                  {item.year}
                </span>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {item.title === "04. 스포츠 & 팬미팅 & 행사경호" ? (
                    <>
                      <span className="md:hidden">04. 스포츠 & 팬미팅</span>
                      <span className="hidden md:inline">
                        04. 스포츠 & 팬미팅 & 행사경호
                      </span>
                    </>
                  ) : (
                    item.title
                  )}
                </h3>
                <p className="text-white/60 text-xs transform translate-y-0 opacity-100 md:translate-y-4 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-300 line-clamp-2">
                  {item.desc}
                </p>
              </div>
              <div className="absolute top-0 right-0 p-8">
                <div className="w-12 h-12 border border-white/20 flex items-center justify-center text-white/40 group-hover:border-[#D4AF37] group-hover:text-[#D4AF37] transition-colors">
                  <ChevronRight />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeProjectIndex !== null && (
        <div className="fixed inset-0 z-[1000] flex flex-col items-center justify-center bg-black/95 backdrop-blur-xl animate-in fade-in duration-500">
          <div
            className="absolute inset-0 opacity-20 blur-3xl scale-110 transition-all duration-700"
            style={{
              backgroundImage: `url(${cases[activeProjectIndex].images[activeImageIndex]})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setActiveProjectIndex(null);
            }}
            className="absolute top-8 right-8 z-[1020] text-white/60 hover:text-white transition-colors"
          >
            <X size={40} strokeWidth={1.5} />
          </button>

          <button
            onClick={handlePrevProject}
            className="absolute left-4 md:left-12 z-[1020] w-14 h-14 border border-white/10 rounded-full flex items-center justify-center text-white/40 hover:text-white hover:border-white transition-all bg-black/20"
          >
            <ChevronLeft size={32} />
          </button>
          <button
            onClick={handleNextProject}
            className="absolute right-4 md:right-12 z-[1020] w-14 h-14 border border-white/10 rounded-full flex items-center justify-center text-white/40 hover:text-white hover:border-white transition-all bg-black/20"
          >
            <ChevronRight size={32} />
          </button>

          <div className="relative z-[1010] w-full max-w-6xl px-4 flex flex-col items-center">
            <div className="w-full aspect-video md:aspect-[21/9] bg-neutral-900 overflow-hidden border border-white/10 shadow-2xl">
              <img
                src={cases[activeProjectIndex].images[activeImageIndex]}
                alt="Project Focus"
                className="w-full h-full object-cover animate-in zoom-in-95 duration-500"
              />
            </div>

            <div className="mt-10 text-center space-y-3">
              <p className="text-[#D4AF37] text-sm font-cinzel tracking-widest uppercase">
                {cases[activeProjectIndex].year}
              </p>
              <h3 className="text-3xl md:text-4xl font-black text-white">
                {cases[activeProjectIndex].title ===
                "04. 스포츠 & 팬미팅 & 행사경호" ? (
                  <>
                    <span className="md:hidden">04. 스포츠 & 팬미팅</span>
                    <span className="hidden md:inline">
                      04. 스포츠 & 팬미팅 & 행사경호
                    </span>
                  </>
                ) : (
                  cases[activeProjectIndex].title
                )}
              </h3>
              <p className="text-white/40 text-sm font-light">
                {cases[activeProjectIndex].imageDetails?.[activeImageIndex] ||
                  cases[activeProjectIndex].desc}
              </p>
            </div>

            <div className="mt-10 flex gap-4 overflow-x-auto max-w-full px-6 py-4 scrollbar-hide">
              {cases[activeProjectIndex].images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImageIndex(i)}
                  className={`w-16 h-16 flex-shrink-0 cursor-pointer border-2 transition-all duration-300 relative group focus:outline-none overflow-visible
                                    ${activeImageIndex === i ? "border-[#D4AF37]" : "border-white/10 grayscale hover:grayscale-0"}
                                `}
                >
                  <div className="w-full h-full relative">
                    <img
                      src={img}
                      className="w-full h-full object-cover block"
                    />
                    {activeImageIndex !== i && (
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors"></div>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

const EndingCredits = ({
  credits,
  onOpenModal,
}: {
  credits: CreditItem[];
  onOpenModal: () => void;
}) => {
  const fullCredits = [...credits, ...credits];

  return (
    <section
      onClick={onOpenModal}
      className="py-32 bg-black border-y border-[#D4AF37]/20 relative h-[700px] overflow-hidden flex flex-col items-center cursor-pointer group"
    >
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent z-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-10"></div>

      <div className="mb-12 text-center z-20 transition-transform group-hover:scale-105 duration-500">
        <h2 className="text-2xl font-cinzel text-gold-gradient tracking-widest gold-glow uppercase">
          Trust of Global Enterprises
        </h2>
        <p className="text-white/40 text-xs tracking-widest mt-2 italic group-hover:text-[#D4AF37] transition-colors">
          Click to view full historical record
        </p>
      </div>

      <div className="relative w-full overflow-hidden flex-1 group-hover:opacity-80 transition-opacity">
        <div className="animate-scroll-up flex flex-col items-center">
          {fullCredits.map((group, idx) => (
            <div key={idx} className="mb-24 text-center">
              <h3 className="text-3xl font-cinzel text-[#D4AF37] mb-8 font-bold">
                {group.year}
              </h3>
              <div className="space-y-4">
                {group.items.map((item, i) => (
                  <p
                    key={i}
                    className="text-xl md:text-2xl text-white/80 font-light group-hover:text-white transition-colors"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CreditsModal = ({
  credits,
  onClose,
}: {
  credits: CreditItem[];
  onClose: () => void;
}) => {
  return (
    <div className="fixed inset-0 z-[1500] bg-black/95 backdrop-blur-2xl flex flex-col animate-in fade-in zoom-in-95 duration-500 overflow-hidden">
      <div className="px-8 py-10 flex justify-between items-center border-b border-white/10 shrink-0">
        <div className="flex flex-col">
          <h2 className="text-3xl font-cinzel text-gold-gradient font-black tracking-widest gold-glow uppercase">
            AceGuard Client company
          </h2>
          <p className="text-white/40 text-xs tracking-[0.3em] mt-2">
            ACE GUARD PREMIUM SECURITY PARTNERSHIP
          </p>
        </div>
        <button
          onClick={onClose}
          className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white transition-all"
        >
          <X size={32} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto custom-scrollbar p-8 md:p-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-20">
            {credits.map((group, idx) => (
              <div
                key={idx}
                className="space-y-8 animate-in slide-in-from-bottom-8 duration-700"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="flex items-center gap-4">
                  <span className="text-5xl font-cinzel font-black text-[#D4AF37] opacity-20">
                    {group.year}
                  </span>
                  <div className="h-[1px] flex-1 bg-gradient-to-r from-[#D4AF37]/50 to-transparent"></div>
                </div>
                <ul className="space-y-4">
                  {group.items.map((item, i) => (
                    <li key={i} className="flex gap-4 items-start group">
                      <div className="w-1.5 h-1.5 mt-2 bg-[#D4AF37] rounded-full shrink-0 shadow-[0_0_8px_rgba(212,175,55,0.8)]"></div>
                      <p className="text-lg text-white/70 font-light leading-relaxed group-hover:text-white transition-colors">
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-32 pt-16 border-t border-white/5 text-center">
            <p className="text-white/20 text-xs tracking-widest font-cinzel">
              PROTECTING THE FUTURE WITH UNMATCHED EXCELLENCE
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactForm = ({ contact }: { contact: SiteData["contact"] }) => {
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const serviceRates = [
    {
      title: "신변보호-데이트폭력, 스토킹, 안심 동행, 법정동행 등",
      desc: "",
      price: "300,000 원",
    },
    {
      title: "각종 행사경호 8시간",
      desc: "투입인원과 기간에 따라 협의-숙식은 의뢰인측에서 제공을 원칙으로 합니다.",
      price: "250,000 원",
    },
    {
      title: "분쟁경호 8시간",
      desc: "투입인원과 기간에 따라 협의-숙식은 의뢰인측에서 제공을 원칙으로 합니다.",
      price: "250,000 원",
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 입력값 검증
    if (!name.trim() || !phone.trim()) {
      alert("성함과 연락처를 모두 입력해주세요.");
      return;
    }

    setIsSending(true);
    setIsSent(false);

    const requestData = {
      name: name.trim(),
      phone: phone.trim(),
    };

    console.log("전송 시작:", requestData);
    console.log(
      "Webhook URL:",
      "https://hook.eu1.make.com/e6t56rwr75twh5g9h3xwuyglacs5t6bj",
    );

    try {
      const response = await fetch(
        "https://hook.eu1.make.com/e6t56rwr75twh5g9h3xwuyglacs5t6bj",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestData),
        },
      );

      console.log("응답 상태:", response.status, response.statusText);
      console.log("응답 헤더:", Object.fromEntries(response.headers.entries()));

      // 응답 본문을 한 번만 읽기
      let responseText = "";
      try {
        responseText = await response.text();
        console.log("응답 본문:", responseText || "(빈 응답)");
      } catch (readError) {
        console.warn("응답 본문 읽기 실패:", readError);
      }

      if (response.ok) {
        console.log("✅ 전송 성공!");
        alert("문의가 정상적으로 접수되었습니다.");
        // 폼 초기화
        setName("");
        setPhone("");
        setIsSent(true);
      } else {
        console.error("❌ 서버 응답 에러:", response.status, responseText);
        alert(
          `전송에 실패했습니다. (상태 코드: ${response.status})\n\n에러 메시지: ${responseText || "서버에서 응답이 없습니다."}`,
        );
      }
    } catch (error) {
      console.error("❌ 네트워크 에러:", error);

      let errorMessage = "문의 전송 중 오류가 발생했습니다.";

      if (
        error instanceof TypeError &&
        error.message.includes("Failed to fetch")
      ) {
        // ERR_BLOCKED_BY_CLIENT 또는 네트워크 차단 감지
        errorMessage =
          "⚠️ 네트워크 요청이 차단되었습니다.\n\n가능한 원인:\n1. 광고 차단기 또는 보안 확장 프로그램\n   → 브라우저 확장 프로그램을 일시적으로 비활성화해보세요\n\n2. 인터넷 연결 문제\n   → 인터넷 연결을 확인해주세요\n\n3. 방화벽 또는 보안 소프트웨어\n   → 보안 프로그램 설정을 확인해주세요\n\n💡 해결 방법:\n- 브라우저 확장 프로그램(광고 차단기 등) 비활성화\n- 시크릿 모드에서 테스트\n- 다른 브라우저에서 테스트";
      } else if (error instanceof Error) {
        errorMessage = `오류: ${error.message}`;
      }

      alert(errorMessage);
      console.error("상세 에러 정보:", {
        name: error instanceof Error ? error.name : "Unknown",
        message: error instanceof Error ? error.message : String(error),
        stack: error instanceof Error ? error.stack : undefined,
      });

      // 추가 디버깅 정보
      console.log("🔍 디버깅 정보:");
      console.log("- User Agent:", navigator.userAgent);
      console.log("- 온라인 상태:", navigator.onLine);
      console.log("- 현재 URL:", window.location.href);
    } finally {
      setIsSending(false);
    }
  };

  const privacyFullText = `(주)에이스가드 (이하 “회사”라 함)는 정보통신망이용촉진및정보보호등에관한법률, 개인정보보호법 등 개인정보와 관련된 법령상의 규정들을 준수하고 있으며, 
개인정보취급방침을 제정하여 이용자의 권익보호에 최선을 다하고 있습니다. 회사는 개인정보취급방침을 통하여 이용자의 개인정보가 어떠한 용도와 방식으로 
이용되고 있으며, 개인정보보호를 위해 회사가 어떠한 조치를 취하는지 알려드립니다. 회사는 개인정보취급방침을 개정하는 경우 
웹사이트 공지사항(또는 개별공지)을 통하여 공지할 것입니다.

1. 수집하는 개인정보의 항목 및 수집방법
가. 회사는 회원가입, 비회원 구매, 상담, 불량이용의 방지 등을 위해 아래와 같은 개인정보를 수집하고 있습니다.
- 필수항목 : 이름, ID, 비밀번호, 이메일, 전화번호, 주소, IP Address, 결제기록
- 선택항목 : 개인맞춤 서비스를 제공하기 위하여 회사가 필요로 하는 정보

나. 수집방법
회사는 이용자들이 회원서비스를 이용하기 위해 회원으로 가입하실 때 서비스 제공을 위한 필수적인 정보들을 온라인 상에서 입력 받고 있습니다. 또한 서비스 내에서의 설문조사나 이벤트 행사 시 통계분석이나 경품 제공 등을 위해 선별적으로 개인정보 입력을 요청할 수 있습니다. 그러나, 이용자의 기본적 인권 침해의 우려가 있는 민감한 개인정보(인종 및 민족, 사상 및 신조, 출신지 및 본적지, 정치적 성향 및 범죄기록, 건강상태 및 성생활 등)는 수집하지 않으며 부득이하게 수집해야 할 경우 이용자들의 사전동의를 반드시 구할 것입니다.

2. 개인정보의 수집 및 이용목적
가. 신규 서비스의 개발
이용자들이 제공한 개인정보를 바탕으로 보다 더 유용한 서비스를 개발할 수 있습니다. 회사는 신규 서비스 개발이나 컨텐츠의 확충 시에 기존 이용자들이 회사에 제공한 개인정보를 바탕으로 개발해야 할 서비스의 우선 순위를 보다 더 효율적으로 정하고, 회사는 이용자들이 필요로 할 컨텐츠를 합리적으로 선택하여 제공할 수 있습니다.

나. 회원관리
회원제 서비스 이용에 따른 본인확인, 개인 식별, 불량회원의 부정 이용 방지와 비인가 사용 방지, 가입 의사 확인, 연령확인, 만14세 미만 아동 개인정보 수집 시 법정 대리인 동의여부 확인, 불만처리 등 민원처리, 고지사항 전달

다. 마케팅 및 광고에 활용
신규 서비스 개발과 이벤트 행사에 따른 정보 전달 및 맞춤 서비스 제공, 인구통계학적 특성에 따른 서비스 제공 및 광고 게재, 접속 빈도 파악 또는 회원의 서비스 이용에 대한 통계

3. 개인정보의 보유 및 이용기간
회사는 이용자의 개인정보를 원칙적으로 개인정보의 수집 및 이용목적이 달성되면 지체 없이 파기합니다. 단, 다음의 정보에 대해서는 아래의 이유로 명시한 기간 동안 보존합니다.

가. 회사의 내부방침에 의한 정보보유 사유
- 부정이용기록 : 부정이용 방지
- 보존기간 : 부정이용일로부터 1년
나. 관련법령에 의한 정보보유 사유
- 계약 또는 청약철회 등에 관한 기록 : 5년 (전자상거래등에서의 소비자보호에 관한 법률)
- 대금결제 및 재화 등의 공급에 관한 기록 : 5년 (전자상거래등에서의 소비자보호에 관한 법률)
- 소비자의 불만 또는 분쟁처리에 관한 기록 : 3년 (전자상거래등에서의 소비자보호에 관한 법률)
- 방문(로그)에 관한 기록 : 3개월(통신비밀보호법)
 
4. 개인정보의 파기 절차 및 방법
이용자의 개인정보는 개인정보의 수집 및 이용목적에서 달성되면 지체 없이 아래와 같은 방법으로 파기합니다.

가. 파기절차
이용자가 서비스 이용 등을 위해 입력하신 정보는 목적이 달성된 후 별도의 DB로 옮겨져(종이의 경우 별도의 서류함) 내부 방침 및 기타 관련 법령 의한 정보보호 사유에 따라(보유 및 이용기간 참조) 일정 기간 저장된 후 파기됩니다. 별도 DB로 옮겨진 개인정보는 법률에 의한 경우가 아니고서는 보유되어지는 이외의 다른 목적으로 이용되지 않습니다.

나. 파기방법
- 종이에 출력된 개인정보 : 분쇄기로 분쇄하거나 소각
- 전자적 파일 형태로 저장된 개인정보 : 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제

5. 개인정보의 제3자 제공
이용자의 개인정보는 개인정보의 수집 및 이용목적에서 동의한 범위 내에서 사용하며, 이용자의 사전 동의 없이는 동 범위를 초과하여 이용하거나 원칙적으로 이용자의 개인정보를 외부에 공개하지 않습니다. 다만 아래의 경우에는 예외로 합니다.
- 이용자들이 사전에 동의한 경우
- 법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우

6. 개인정보의 취급위탁
회사는 서비스의 원활한 제공을 위해 개인정보를 위탁처리하고 있으며, 관계 법령에 따라 위탁계약 시 개인정보가 안전하게 관리될 수 있도록 필요한 사항을 규정하고 있습니다.
현재 회사의 개인정보처리수탁자와 그 업무의 내용은 다음과 같습니다.
-위탁 대상자(수탁자) / 위탁업무 내용 / 개인정보항목 / 보유 및 이용기간 순
[배송업체명 기입] : 상품배송 / - / 계약종료시까지
[㈜코리아센터닷컴] : 고객정보DB시스템운영(전산아웃소싱) / - / 계약종료시까지
[본인인증기관 업체명 기입] : 본인인증 / - / 계약종료시까지
[PG업체명 기입] : 결제관련 / - / 계약종료시까지

7. 이용자 및 법정대리인의 권리와 그 행사방법
가. 이용자 및 법정 대리인은 언제든지 등록되어 있는 자신 혹은 당해 만 14세 미만 아동의 개인정보를 조회하거나 수정할 수 있으며, 동의철회(가입해지)를 요청할 수도 있습니다.
나. 이용자 혹은 만 14세 미만 아동의 개인정보 조회, 수정을 위해서는 로그인 후 MyPage에서 ‘개인정보변경’(또는 ‘회원정보수정’ 등)을, 가입해지(동의철회)를 위해서는 "회원탈퇴"를 클릭하여 본인 확인 절차를 거치신 후 직접 열람, 정정 또는 탈퇴가 가능합니다. 혹은 개인정보관리책임자에게 서면, 전화 또는 이메일로 연락하시면 지체 없이 조치하겠습니다.
다. 이용자가 개인정보의 오류에 대한 정정을 요청하신 경우에는 정정을 완료하기 전까지 당해 개인정보를 이용 또는 제공하지 않습니다. 또한 잘못된 개인정보를 제3자에게 이미 제공한 경우에는 정정 처리결과를 제3자에게 지체 없이 통지하여 정정이 이루어지도록 하겠습니다.
라. 회사는 이용자 혹은 법정 대리인의 요청에 의해 해지 또는 삭제된 개인정보는 "3. 개인정보의 보유 및 이용기간"에 명시된 바에 따라 처리하고 그 외의 용도로 열람 또는 이용할 수 없도록 처리하고 있습니다.

8. 쿠키(cookie)의 운영에 관한 사항
회사는 개인화되고 맞춤화된 서비스를 제공하기 위해서 이용자의 정보를 저장하고 수시로 불러오는 ‘쿠키(cookie)’ 등을 운용합니다. 쿠키란 회사의 웹사이트를 운영하는데 이용되는 서버가 이용자의 브라우저에 보내는 아주 작은 텍스트 파일로서 이용자의 컴퓨터 하드디스크에 저장됩니다.

가. 쿠키 등 사용 목적
이용자의 접속 빈도나 방문 시간 등을 분석, 이용자의 취향과 관심분야를 파악 및 자취 추적, 각종 이벤트 참여 정도 및 방문 회수 파악 등을 통한 타겟 마케팅 및 맞춤 서비스 제공
나. 쿠키의 설치/운영
이용자는 쿠키 설치에 대한 선택권을 가지고 있습니다. 따라서, 이용자는 웹브라우저에서 옵션을 설정함으로써 모든 쿠키를 허용하거나, 쿠키가 저장될 때마다 확인을 거치거나, 아니면 모든 쿠키의 저장을 거부할 수도 있습니다.
다. 쿠키 설정 거부 방법
쿠키 설정을 거부하는 방법으로는 이용자가 사용하시는 웹 브라우저의 옵션을 택함으로써 모든 쿠키를 허용하거나 쿠키를 저장할 때마다 확인을 거치거나, 모든 쿠키의 저장을 거부할 수 있습니다. 단, 이용자께서 쿠키 설치를 거부하였을 경우 서비스 제공에 어려움이 있을 수 있습니다.
설정방법 예(인터넷 익스플로어의 경우) : 웹 브라우저 상단의 도구 > 인터넷 옵션 > 개인정보

9. 개인정보보호를 위한 기술적/관리적 대책
가. 회사는 이용자의 개인정보를 취급함에 있어 개인정보가 분실, 도난, 누출, 변조, 또는 훼손되지 않도록 안전성 확보를 위하여 다음과 같은 기술적 대책을 강구하고 있습니다.
- 이용자의 개인정보는 암호화 되어 보호되고 있습니다. 그러나 이용자의 개인정보를 회사가 암호화시켜 보호하고 있음에도 불구하고 공공장소에서의 인터넷사용 등의 과정에서 의도하지 않게 분실하거나 타인에게 도난 또는 유출될 가능성이 있습니다. 그러므로 이용자는 개인정보를 타인에게 유출시키거나 대여, 제공 등 공개하여서는 아니 되며, 피싱 등 사회공학적 방법에 의한 개인정보 무단 수집으로부터 자신의 개인정보를 책임 있게 관리하여야 합니다. 이러한 개인정보의 분실, 도난 유출, 피싱, 공개에 대해서 회사는 어떠한 책임도 지지 않습니다.
- 이용자의 개인정보는 기본적으로 비밀번호에 의해 보호되며, 파일 및 전송 데이터를 암호화하여 중요한 데이터는 별도의 보안기능을 통해 보호되고 있습니다.
- 회사는 항상 새로운 정보를 자동으로 Update하는 백신을 이용하여 컴퓨터 바이러스에 의한 피해를 방지하기 위해 24시간 근무요원이 상주하면서 보호조치를 취하고 있습니다. 만일, 바이러스 침투시 자동으로 바이러스 침투 Alarm을 근무자에게 보냄과 동시에 자동 치료하도록 되어 있습니다.
- 회사는 암호알고리즘을 이용하여 네트워크상의 개인정보를 안전하게 전송할 수 있는 보안장치(SSL 또는 SET)를 채택하고 있습니다.
- 회사는 해킹 등 회사 정보통신망 침입에 의해 이용자의 개인정보가 유출되는 것을 방지하기 위해 외부로부터의 침입탐지 및 침입차단 시스템을 24시간 가동하고 있습니다.
나. 회사는 이용자의 개인정보보호의 중요성을 인식하고 있으며 이용자의 개인정보보호를 위해 개인정보취급직원을 최소한으로 제한하는 등 다음과 같은 관리적 조치를 취하고 있습니다.
- 개인정보를 취급하는 직원을 대상으로 새로운 보안 기술 습득 및 개인정보보호의무 등에 관해 정기적인 사내교육 및 외부 위탁교육을 실시하고 있습니다.
- 회사는 모든 입사자에게 보안서약서를 제출케 함으로 사람에 의한 정보유출을 사전에 방지하고 개인정보취급방침에 대한 이행사항 및 직원의 준수여부를 감시하고 위반내용이 확인되는 경우 이를 시정 또는 개선하고 기타 필요한 조치를 취하기 위한 내부절차를 마련하고 있습니다. 개인정보 관련 취급자의 업무 인수인계는 보안이 유지된 상태에서 철저하게 이뤄지고 있으며 입사/퇴사 후 개인정보 사고에 대한 책임을 명확화하고 있습니다.
- 개인정보와 일반 데이터를 혼합하여 보관하지 않고 별도의 서버 통해 분리하여 보관하고 있습니다.
- 전산실 및 자료 보관실 등을 특별 보호구역으로 설정하여 출입을 통제하고 있습니다.
- 회사는 이용자 개인의 실수나 기본적인 인터넷의 위험성 때문에 일어나는 일들에 대해 책임을 지지 않습니다. 이용자 개개인이 본인의 개인정보를 보호하기 위해서 자신의 아이디(ID) 와 비밀번호를 적절하게 관리하고 이에 대한 책임을 져야 합니다.

10. 개인정보관리책임자
회사는 이용자가 좋은 정보를 안전하게 이용할 수 있도록 최선을 다하고 있습니다. 개인정보를 보호하는데 있어 이용자에게 고지한 사항들에 반하는 사고가 발생할 시에는 회사가 모든 책임을 집니다. 그러나, 기술적인 보완조치를 했음에도 불구하고, 해킹 등 기본적인 네트워크상의 위험성에 의해 발생하는 예기치 못한 사고로 인한 정보의 훼손 및 방문자가 작성한 게시물에 의한 각종 분쟁에 관해서 회사는 책임을 지지 않습니다. 이용자의 개인정보를 취급하는 책임자는 다음과 같으며 개인정보 관련 문의사항에 신속하고 성실하게 답변해 드리고 있습니다.

개인정보관리책임자 성명:이현석

전화번호: 02-2298-0129

이메일:ssaura98@naver.com

11. 개인정보에 관한 민원서비스
회사는 고객의 개인정보를 보호하고 개인정보와 관련한 불만을 처리하기 위하여 아래와 같이 개인정보보호민부서를 지정하여 운영하고 있습니다.

전화번호: 070-4390-7508
이메일:ryanyoon333@gmail.com

이용자는 회사의 서비스를 이용하며 발생하는 모든 개인정보보호 관련 민원을 개인정보관리책임자 혹은 담당부서로 신고하실 수 있습니다. 회사는 이용자들의 신고사항에 대해 신속하고 충분한 답변을 드릴 것입니다. 기타 개인정보침해에 대한 신고나 상담이 필요하신 경우에는 아래 사항을 참고하시기 바랍니다.

- 개인정보 침해신고센터 (privacy.kisa.or.kr / 국번없이 118)
- 개인정보 분쟁조정위원회 (www.kopico.go.kr / 국번없이 1833-6972)
- 대검찰청 사이버수사과 (www.spo.go.kr / 국번없이 1301)
- 경찰청 사이버수사국 (cyberbureau.police.go.kr / 국번없이 182)

12. 고지의 의무
가. 본 개인정보취급방침을 포함한 기타 개인정보보호에 대한 상세한 내용은 서비스 홈페이지 첫 화면에 공개함으로써 이용자가 언제나 용이하게 보실 수 있도록 조치하고 있습니다.
나. 법령 정책 또는 보안기술의 변경에 따라 중요한 내용의 추가 삭제 및 수정이 있을 시에는 변경되는 개인정보취급방침을 시행하기 전에 서비스 홈페이지를 통해 변경이유 및 내용 등에 대하여 공지하도록 하겠습니다.
다. 본 개인정보취급방침의 내용은 수시로 변경될 수 있으므로 서비스홈페이지를 방문하실 때 마다 이를 확인하시기 바랍니다.

본 방침은: 2022년 01월 01일부터 시행됩니다`;

  return (
    <section id="contact-section" className="py-24 px-4 bg-[#00050D]">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {/* Consultation Section */}
        <div className="flex flex-col">
          <span className="text-[#D4AF37] tracking-widest text-sm uppercase">
            Direct Consultation
          </span>
          <h2 className="text-4xl md:text-5xl font-cinzel text-white mt-4 mb-8">
            상담문의
          </h2>

          <div className="space-y-12">
            {/* Contact Numbers Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex items-start gap-4 p-6 bg-black/40 border border-white/5">
                <div className="w-12 h-12 bg-[#D4AF37]/10 flex items-center justify-center rounded-sm text-[#D4AF37]">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-white/40 text-sm">대표전화</p>
                  <p className="text-2xl text-white font-bold whitespace-nowrap">
                    {contact.mainPhone}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-black/40 border border-white/5">
                <div className="w-12 h-12 bg-[#D4AF37]/10 flex items-center justify-center rounded-sm text-[#D4AF37]">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <p className="text-white/40 text-sm">긴급상담</p>
                  <p className="text-2xl text-white font-bold text-gold-gradient whitespace-nowrap">
                    {contact.emergencyPhone}
                  </p>
                </div>
              </div>
            </div>

            {/* Service Pricing Section */}
            <div className="space-y-6">
              <h3 className="text-[#D4AF37] font-bold text-xl tracking-wider">
                서비스 가격 안내
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {serviceRates.map((rate, idx) => (
                  <div
                    key={idx}
                    className="bg-white/5 border border-white/25 p-6 flex flex-col gap-4 relative h-full"
                  >
                    <div className="flex justify-between items-start gap-4">
                      <h4 className="text-white font-bold text-lg leading-snug flex-1">
                        {rate.title}
                      </h4>
                      <span className="text-[#D4AF37] font-bold text-2xl whitespace-nowrap">
                        {rate.price}
                      </span>
                    </div>
                    {rate.desc && (
                      <p className="text-white/40 text-sm mt-auto leading-relaxed pt-4 border-t border-white/10">
                        {rate.desc}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* SMS Sending Form */}
            <div className="w-full">
              <form
                onSubmit={handleSubmit}
                className="bg-white/5 p-8 border border-white/10 space-y-8"
              >
                <div className="flex flex-col md:flex-row gap-8 items-end">
                  <div className="w-full md:w-[20%]">
                    <label className="block text-white/60 text-sm mb-2 font-bold tracking-tight">
                      성함 (필수)
                    </label>
                    <input
                      required
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-black/40 border border-white/10 px-4 py-4 text-white focus:outline-none focus:border-[#D4AF37] transition-colors rounded-none"
                      placeholder="성함"
                    />
                  </div>
                  <div className="w-full md:w-[25%]">
                    <label className="block text-white/60 text-sm mb-2 font-bold tracking-tight">
                      연락처 (필수)
                    </label>
                    <input
                      required
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-black/40 border border-white/10 px-4 py-4 text-white focus:outline-none focus:border-[#D4AF37] transition-colors rounded-none"
                      placeholder="연락처"
                    />
                  </div>
                  <div className="flex-1 w-full">
                    <button
                      type="submit"
                      disabled={isSending}
                      className="w-full py-4 bg-gradient-to-r from-[#D4AF37] via-[#FFFACD] to-[#BF9B30] text-black font-black tracking-[0.2em] hover:brightness-110 transition-all uppercase text-center block disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSending ? "전송 중..." : "문자 보내기"}
                    </button>
                  </div>
                </div>

                {/* Privacy Consent Content */}
                <div className="pt-6 border-t border-white/10">
                  <div className="flex items-center gap-3 mb-4">
                    <input
                      required
                      type="checkbox"
                      id="privacy-consent"
                      className="w-4 h-4 accent-[#D4AF37] border-white/20 bg-black/40"
                      defaultChecked
                    />
                    <label
                      htmlFor="privacy-consent"
                      className="text-white/80 text-sm font-bold cursor-pointer hover:text-[#D4AF37] transition-colors"
                    >
                      [필수] 개인정보 수집 및 이용에 동의합니다.
                    </label>
                  </div>
                  <div className="bg-black/60 p-4 border border-white/5 h-32 overflow-y-auto rounded-sm text-white/40 text-[11px] leading-relaxed custom-scrollbar">
                    <p className="whitespace-pre-wrap">{privacyFullText}</p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = ({
  contact,
  onAdminOpen,
}: {
  contact: SiteData["contact"];
  onAdminOpen: () => void;
}) => {
  return (
    <footer className="py-12 px-4 border-t border-white/10 bg-black">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <div className="flex items-center gap-4 mb-4 justify-center md:justify-start">
            <h2 className="font-cinzel text-2xl font-bold text-gold-gradient">
              ACE GUARD
            </h2>
            <button
              onClick={onAdminOpen}
              className="text-white/10 hover:text-[#D4AF37] transition-colors"
            >
              <Settings size={14} />
            </button>
          </div>
          <div className="text-white/40 text-[11px] leading-relaxed max-w-2xl space-y-1">
            <p>
              <span
                onClick={onAdminOpen}
                className="cursor-pointer hover:text-[#D4AF37] transition-colors"
              >
                (주)에이스가드
              </span>{" "}
              | 대표 : {contact.owner} | 사업자등록번호 : {contact.businessReg}{" "}
              | 통신판매업신고번호: 제 2022-경기양평-0030 호
            </p>
            <p>
              본사 - {contact.address} | 사무소 - {contact.office}
            </p>
            <p>
              전화번호 : {contact.mainPhone} | 이메일 : {contact.email}
            </p>
            <p className="pt-2">
              Copyright 2025 ACE GUARD Security Service. All Rights Reserved.
            </p>
          </div>
        </div>

        <div className="flex gap-6">
          <a
            href="https://www.instagram.com/ace._.guard"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 border border-white/10 flex items-center justify-center text-white/60 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all"
          >
            <Instagram size={20} />
          </a>
          <a
            href="https://www.youtube.com/channel/UCEYQhbuqHRtzSl-l-NKhF2Q"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 border border-white/10 flex items-center justify-center text-white/60 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all"
          >
            <Youtube size={20} />
          </a>
          <a
            href="https://blog.naver.com/ssaura98"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 border border-white/10 flex items-center justify-center text-white/60 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M16.273 12.845L7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727v12.845z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

const FeaturesGrid = () => {
  const features = [
    {
      icon: ShieldCheck,
      title: "완벽한 보안",
      desc: "어떠한 상황에서도 고객의 안전을 1순위로 보장합니다.",
    },
    {
      icon: Users,
      title: "엄격한 선발",
      desc: "전원 무도 유단자 및 특수부대 출신의 정예요원 투입",
    },
    {
      icon: Lock,
      title: "비밀 보장",
      desc: "고객의 사생활과 기업의 기밀을 철저히 보호합니다.",
    },
    {
      icon: Award,
      title: "최상의 의전",
      desc: "단순 경호를 넘어 품격 있는 의전 서비스를 제공합니다.",
    },
  ];

  return (
    <section className="py-12 md:py-24 bg-[#010816] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((f, i) => (
          <div
            key={i}
            className="p-8 bg-black/40 border border-white/5 hover:border-[#D4AF37]/50 transition-all group"
          >
            <f.icon
              className="text-[#D4AF37] mb-6 group-hover:scale-110 transition-transform"
              size={40}
            />
            <h4 className="text-xl font-bold text-white mb-4">{f.title}</h4>
            <p className="text-white/50 text-sm leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

function App() {
  const [siteData, setSiteData] = useState<SiteData>(INITIAL_DATA);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isCreditsModalOpen, setIsCreditsModalOpen] = useState(false);
  const [password, setPassword] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("aceguard_site_data");
    if (saved) {
      try {
        setSiteData(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse saved site data", e);
      }
    }
  }, []);

  useEffect(() => {
    document.title = siteData.seo.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", siteData.seo.description);
  }, [siteData]);

  const saveSiteData = (newData: SiteData) => {
    setSiteData(newData);
    localStorage.setItem("aceguard_site_data", JSON.stringify(newData));
  };

  const handleAdminAuth = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "admin0919") {
      setIsAdminOpen(true);
      setIsAuthOpen(false);
      setPassword("");
    } else {
      alert("비밀번호가 올바르지 않습니다.");
    }
  };

  const cleanPhone = siteData.contact.emergencyPhone.replace(/-/g, "");

  return (
    <div className="min-h-screen">
      {isAdminOpen && (
        <AdminDashboard
          data={siteData}
          onSave={saveSiteData}
          onClose={() => setIsAdminOpen(false)}
        />
      )}
      {isCreditsModalOpen && (
        <CreditsModal
          credits={siteData.credits}
          onClose={() => setIsCreditsModalOpen(false)}
        />
      )}

      {isAuthOpen && (
        <div className="fixed inset-0 z-[2100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <form
            onSubmit={handleAdminAuth}
            className="bg-neutral-900 border border-white/10 p-8 rounded-2xl w-full max-w-sm"
          >
            <div className="flex flex-col items-center mb-6">
              <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center text-black mb-4">
                <Lock size={32} />
              </div>
              <h3 className="text-xl font-bold text-white">관리자 로그인</h3>
              <p className="text-white/40 text-sm mt-1">
                대시보드 접속을 위해 암호를 입력하세요.
              </p>
            </div>
            <input
              autoFocus
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full bg-black border border-white/10 rounded-lg p-3 text-white mb-4 outline-none focus:border-[#D4AF37]"
            />
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setIsAuthOpen(false)}
                className="flex-1 py-3 text-white/60 hover:text-white transition-colors"
              >
                취소
              </button>
              <button
                type="submit"
                className="flex-1 bg-[#D4AF37] text-black font-bold rounded-lg py-3 hover:brightness-110"
              >
                접속
              </button>
            </div>
          </form>
        </div>
      )}

      <nav className="fixed top-0 left-0 w-full z-[100] px-8 py-6 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent">
        <div className="flex flex-col">
          <div className="font-cinzel text-lg md:text-3xl font-black text-gold-gradient tracking-[0.15em] leading-none uppercase">
            ACE GUARD
          </div>
          <div className="text-white/90 text-[9px] md:text-base tracking-normal mt-0.5 md:mt-1 font-bold whitespace-nowrap">
            경호전문업체 경찰청허가 제2088호
          </div>
        </div>
      </nav>

      <VideoSection />
      <PortfolioSection cases={siteData.cases} />
      <EndingCredits
        credits={siteData.credits}
        onOpenModal={() => setIsCreditsModalOpen(true)}
      />
      <ReputationSection />
      <FeaturesGrid />
      <ContactForm contact={siteData.contact} />
      <Footer
        contact={siteData.contact}
        onAdminOpen={() => setIsAuthOpen(true)}
      />

      <div className="fixed bottom-8 right-8 z-[100] flex flex-col gap-4">
        <button
          onClick={() =>
            document
              .getElementById("contact-section")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="flex items-center justify-center w-12 h-12 bg-[#D4AF37] text-black rounded-full font-bold shadow-lg shadow-[#D4AF37]/20 hover:scale-110 transition-transform group relative"
        >
          <Phone size={20} />
          <span className="absolute right-14 bg-black/80 text-[#D4AF37] text-[10px] px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            문자 상담
          </span>
        </button>
        <a
          href="http://pf.kakao.com/_jDrEG/chat"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 bg-[#FEE500] text-black rounded-full font-bold shadow-lg hover:scale-110 transition-transform group relative"
        >
          <MessageSquare size={20} fill="currentColor" />
          <span className="absolute right-14 bg-black/80 text-[#FEE500] text-[10px] px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            카톡 상담
          </span>
        </a>
      </div>
    </div>
  );
}

export default App;
