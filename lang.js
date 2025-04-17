// Translation dictionary
const translations = {
  ar: {
    site_name: "أفق العمران",
    footer: "© 2025 أفق العمران - جميع الحقوق محفوظة",
    title_home: "الرئيسية | أفق العمران",
    title_about: "عن الشركة | أفق العمران",
    title_services: "الخدمات | أفق العمران",
    title_portfolio: "أعمالنا | أفق العمران",
    title_team: "فريق العمل | أفق العمران",
    title_contact: "تواصل معنا | أفق العمران",
    title_faq: "الأسئلة الشائعة | أفق العمران",
    nav_home: "الرئيسية",
    nav_about: "عن الشركة",
    nav_services: "الخدمات",
    nav_portfolio: "الأعمال",
    nav_team: "الفريق",
    nav_contact: "تواصل معنا",
    nav_faq: "الأسئلة",
    hero_title: "نبني المستقبل بثقة",
    hero_subtitle: "شركة عراقية متخصصة في المقاولات العامة والتجارة والنقل والاستثمار العقاري. نمتلك خبرة تمتد لأكثر من عشر سنوات في السوق المحلي والدولي، ونسعى لتقديم خدمات مبتكرة تلبي احتياجات عملائنا بدقة واحتراف.",
    about_heading: "عن شركة أفق العمران",
    about_text: "شركة أفق العمران هي شركة عراقية تأسست بهدف النهوض بقطاع البناء والاستثمار من خلال تقديم حلول متكاملة وعالية الجودة في المقاولات، التجارة، والنقل. نعمل في بيئة تتسم بالتحديات، لكننا نؤمن أن الجودة، الالتزام، والتخطيط الجيد هي مفاتيح النجاح.",
    vision_heading: "رؤيتنا",
    vision_text: "رؤيتنا أن نكون الخيار الأول على مستوى العراق والشرق الأوسط في تقديم خدمات هندسية وتطوير عقاري مبتكر يحقق أعلى مستويات الرضا للعملاء.",
    mission_heading: "رسالتنا",
    mission_text: "نسعى لتوفير حلول فعالة ومستدامة في كافة مشاريعنا، مع التركيز على التطوير المستمر والالتزام الكامل بمواعيد التسليم وجودة التنفيذ.",
    services_heading: "خدماتنا",
    service_1_title: "المقاولات العامة",
    service_1_desc: "تنفيذ مشاريع البناء...",
    service_2_title: "التجارة العامة",
    service_2_desc: "توريد المواد والمعدات...",
    service_3_title: "الاستثمار العقاري",
    service_3_desc: "شراء وتطوير وبيع العقارات...",
    service_4_title: "النقل والمواصلات",
    service_4_desc: "خدمات لوجستية متكاملة...",
    portfolio_heading: "أعمالنا السابقة",
    project_1_title: "مشروع بناء مجمع سكني - الموصل",
    project_1_desc: "تنفيذ متكامل لمجمع سكني...",
    project_2_title: "مشروع تأهيل طرق",
    project_2_desc: "إعادة تأهيل طرق رئيسية...",
    project_3_title: "نقل بضائع من العراق إلى تركيا",
    project_3_desc: "عملية لوجستية ضخمة...",
    team_heading: "فريقنا",
    team_intro: "يضم فريق أفق العمران نخبة من الخبراء...",
    member_1_name: "م. أحمد آل زكريا",
    member_1_title: "المدير الإداري",
    member_1_bio: "يشرف أحمد على سير العمليات الإدارية داخل الشركة ويضمن كفاءة النظام التنظيمي. يتمتع بخلفية هندسية وخبرة في القيادة الإدارية، مما يجعله عنصرًا أساسيًا في التخطيط ومراقبة الأداء.",
    member_1_alt: "م. أحمد الزكريا - المدير الإداري",
    member_2_name: "نانسي عجرم",
    member_2_title: "السكرتيرة التنفيذية",
    member_2_bio: "تقوم نانسي بترتيب جداول المدراء التنفيذيين، وإدارة المراسلات، وضمان التواصل الفعّال بين الأقسام المختلفة. تعتبر دقتها ومهنيتها من العوامل الرئيسية في تعزيز كفاءة الإدارة العليا.",
    member_2_alt: "نانسي عجرم - السكرتيرة التنفيذية",
    member_3_name: "م. براء الطائي",
    member_3_title: "شريك إداري في الأعمال",
    member_3_bio: "يساهم براء في تطوير الأعمال والعمليات الإدارية على حد سواء. وتُمكّنه خبرته المتنوعة من إدارة المشاريع الداخلية وبناء علاقات استراتيجية مع الشركاء والمستثمرين.",
    member_3_alt: "م. براء الطائي - شريك إداري في الأعمال",
    contact_heading: "تواصل معنا",
    contact_intro: "يسعدنا تواصلك معنا...",
    placeholder_name: "الاسم الكامل",
    placeholder_email: "البريد الإلكتروني",
    placeholder_message: "اكتب رسالتك هنا...",
    send_button: "إرسال",
    address_label: "العنوان:",
    phone_label: "الهاتف:",
    email_label: "البريد الإلكتروني:",
    faq_heading: "الأسئلة الشائعة",
    faq_q1: "ما هي مجالات عمل شركة أفق العمران؟",
    faq_a1: "نحن نعمل في المقاولات العامة، التجارة، الاستثمار العقاري، والنقل.",
    faq_q2: "أين يقع مقر الشركة؟",
    faq_a2: "في مدينة الموصل، محافظة نينوى.",
    faq_q3: "هل تقدمون خدمات خارج العراق؟",
    faq_a3: "نعم، عند الطلب.",
    faq_q4: "كيف يمكنني التواصل معكم؟",
    faq_a4: "من خلال صفحة تواصل معنا.",
    faq_q5: "هل تقدمون خدمات التصميم الداخلي أيضًا؟",
    faq_a5: "نعم، لدينا فريق مختص في التصميم الداخلي للمشاريع السكنية والتجارية باستخدام أحدث البرامج والاتجاهات العالمية.",
    faq_q6: "هل يمكنكم تنفيذ مشاريع في محافظات أخرى؟",
    faq_a6: "بالتأكيد، نغطي كافة محافظات العراق ولدينا القدرة على التنقل والانتشار السريع وفق متطلبات المشروع.",
    home_intro_heading: "من نحن؟",
    home_intro_text: "أفق العمران هي شركة عراقية متخصصة في تنفيذ المشاريع الإنشائية والتجارية والعقارية والنقل...",
    home_services_heading: "لماذا نحن؟",
    home_feature1_title: "الخبرة",
    home_feature1_text: "أكثر من 10 سنوات من الخبرة في السوق العراقي.",
    home_feature2_title: "الجودة",
    home_feature2_text: "نلتزم بأعلى معايير الجودة في جميع مشاريعنا.",
    home_feature3_title: "الالتزام",
    home_feature3_text: "نلتزم بالوقت والميزانية وبناء علاقات طويلة الأمد مع عملائنا."
  },
  en: {
    site_name: "Ufuq Al-Omran",
    footer: "© 2025 Ufuq Al-Omran - All rights reserved",
    title_home: "Home | Ufuq Al-Omran",
    title_about: "About Us | Ufuq Al-Omran",
    title_services: "Services | Ufuq Al-Omran",
    title_portfolio: "Portfolio | Ufuq Al-Omran",
    title_team: "Team | Ufuq Al-Omran",
    title_contact: "Contact Us | Ufuq Al-Omran",
    title_faq: "FAQ | Ufuq Al-Omran",
    nav_home: "Home",
    nav_about: "About",
    nav_services: "Services",
    nav_portfolio: "Portfolio",
    nav_team: "Team",
    nav_contact: "Contact",
    nav_faq: "FAQ",
    hero_title: "Building the Future with Confidence",
    hero_subtitle: "An Iraqi company specialized in general contracting, trade, logistics, and real estate investment. With over a decade of experience, we offer innovative solutions tailored to client needs with unmatched professionalism.",
    about_heading: "About Ufuq Al-Omran",
    about_text: "Ufuq Al-Omran is an Iraqi company established to elevate construction and investment sectors by providing high-quality, integrated solutions in contracting, trade, and logistics. We operate in a challenging environment, but we believe that quality, dedication, and strategic planning are the keys to success.",
    vision_heading: "Our Vision",
    vision_text: "Our vision is to become the leading engineering and real estate development firm in Iraq and the wider Middle East, delivering exceptional, client-focused solutions.",
    mission_heading: "Our Mission",
    mission_text: "Our mission is to offer efficient, sustainable solutions in every project we undertake, with a focus on innovation, punctuality, and excellence in execution.",
    services_heading: "Our Services",
    service_1_title: "General Contracting",
    service_1_desc: "We handle residential, commercial, and industrial construction projects from planning to execution and final delivery. Our team utilizes premium materials and seasoned engineers to ensure safety and precision in every phase.",
    service_2_title: "General Trade",
    service_2_desc: "We operate a strong trade network to supply construction materials, industrial equipment, and engineering tools from local and global sources. Our clients benefit from competitive pricing and guaranteed quality.",
    service_3_title: "Real Estate Investment",
    service_3_desc: "We invest in residential and commercial real estate projects in key locations throughout Iraq. Our offerings include land acquisition, planning, construction, and property marketing.",
    service_4_title: "Transportation",
    service_4_desc: "We offer full-spectrum logistics solutions, including domestic and cross-border cargo transport using a modern fleet and real-time tracking for maximum security and efficiency.",
    portfolio_heading: "Our Projects",
    project_1_title: "Residential Complex – Mosul",
    project_1_desc: "Full execution of a 60-unit housing complex.",
    project_2_title: "Road Rehabilitation",
    project_2_desc: "Paving 10km of vital roads in Nineveh.",
    project_3_title: "Export to Turkey",
    project_3_desc: "Large-scale export of industrial equipment.",
    team_heading: "Our Team",
    team_intro: "We bring together expert engineers, managers, and financial professionals...",
    member_1_name: "Eng. Ahmed Al-Zakaria",
    member_1_title: "Administrative Manager",
    member_1_bio: "Ahmed oversees the company's operational workflow and ensures all administrative systems run efficiently. With a background in engineering and organizational leadership, he plays a vital role in strategic planning and performance monitoring.",
    member_1_alt: "Eng. Ahmed Al-Zakaria – Administrative Manager",
    member_2_name: "Nancy Ajram",
    member_2_title: "Executive Secretary",
    member_2_bio: "Nancy coordinates executive schedules, manages correspondence, and ensures smooth communication between departments. Her professionalism and attention to detail are key to maintaining executive efficiency.",
    member_2_alt: "Nancy Ajram – Executive Secretary",
    member_3_name: "Eng. Baraa Al-Taie",
    member_3_title: "Administrative Business Partner",
    member_3_bio: "Baraa supports both business development and administrative operations. Her hybrid expertise allows her to manage internal projects while contributing to external partnerships and stakeholder engagement.",
    member_3_alt: "Eng. Baraa Al-Taie – Administrative Business Partner",
    contact_heading: "Contact Us",
    contact_intro: "We’re happy to hear from you. Please fill out the form below.",
    placeholder_name: "Full Name",
    placeholder_email: "Email Address",
    placeholder_message: "Your message...",
    send_button: "Send",
    address_label: "Address:",
    phone_label: "Phone:",
    email_label: "Email:",
    faq_heading: "Frequently Asked Questions",
    faq_q1: "What services do you offer?",
    faq_a1: "We operate in contracting, trading, real estate and logistics.",
    faq_q2: "Where is your office located?",
    faq_a2: "In Mosul, Nineveh Governorate, Iraq.",
    faq_q3: "Do you provide services outside Iraq?",
    faq_a3: "Yes, upon request.",
    faq_q4: "How can I contact you?",
    faq_a4: "Via the contact page or email.",
    faq_q5: "Do you also offer interior design services?",
    faq_a5: "Yes, we have a dedicated team for residential and commercial interior design, utilizing cutting-edge tools and global trends.",
    faq_q6: "Can you operate outside Mosul?",
    faq_a6: "Absolutely. We operate across all Iraqi provinces and can scale rapidly depending on project needs.",
    home_intro_heading: "Who Are We?",
    home_intro_text: "Ufuq Al-Omran was founded in Mosul with a clear mission: to lead Iraq’s development through strategic, high-quality construction and investment projects. Our success is rooted in strong planning, effective resource management, and an unwavering commitment to global standards. We bring together a team of expert engineers and project managers to deliver results across commercial, residential, and industrial sectors.",
    home_services_heading: "Why Choose Us?",
    home_feature1_title: "Experience",
    home_feature1_text: "Over 10 years of experience in the Iraqi market.",
    home_feature2_title: "Quality",
    home_feature2_text: "We follow the highest quality standards in all our projects.",
    home_feature3_title: "Commitment",
    home_feature3_text: "We commit to time, budget and long-term partnerships."
  }
};

// Apply translations
function switchLang(lang) {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) el.textContent = translations[lang][key];
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (translations[lang][key]) el.placeholder = translations[lang][key];
  });

  const titleEl = document.querySelector("title");
  const titleKey = titleEl?.getAttribute("data-i18n");
  if (titleKey && translations[lang][titleKey]) {
    titleEl.textContent = translations[lang][titleKey];
  }

  document.querySelectorAll(".lang-option").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
  });

  document.querySelectorAll("[data-i18n-alt]").forEach(el => {
  const key = el.getAttribute("data-i18n-alt");
  if (translations[lang][key]) el.alt = translations[lang][key];
  });

}

// Load and apply language on page load
document.addEventListener("DOMContentLoaded", () => {
  let currentLang = localStorage.getItem("language");
  if (!currentLang) {
    const browserLang = navigator.language.startsWith("ar") ? "ar" : "en";
    localStorage.setItem("language", browserLang);
    currentLang = browserLang;
  }
  switchLang(currentLang);

  document.querySelectorAll(".lang-option").forEach(btn => {
    btn.addEventListener("click", () => {
      const selectedLang = btn.getAttribute("data-lang");
      if (!selectedLang) return;
      localStorage.setItem("language", selectedLang);
      switchLang(selectedLang);
    });
  });
});
