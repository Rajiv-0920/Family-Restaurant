import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Translation resources based on the provided JSON
const resources = {
  en: {
    translation: {
      header: {
        slogan: "Taste of <1>India</1>",
        callToAction: "Reserve your spot now",
        description:
          "Step into the warmth of KhaKai Family Restaurant, your go-to family-friendly spot from classic comfort foods to a warm, inviting atmosphere that makes every meal a special occasion for you and your family.",
        button: "View Menu",
      },
      sections: {
        categories: {
          title: "Categories",
          items: {
            biryani: "Biryani Bonanza",
            mutton: "Mutton Special",
            description:
              "Most Loved Dishes For All Your Biryani/Mutton Cravings! Taste And Variety!",
          },
        },
        specialDishes: {
          title: "Our Special Dishes",
          items: {
            pizza: "Italian Cheese Baked Margherita Pizza fresh basil",
            sushi: "Roll Sushi",
            price: "₹299",
          },
        },
        gallery: {
          title: "Gallery",
          items: [
            "Food and Drinks",
            "Exterior and Storage",
            "Ambiance and Interior",
            "Staff and Service",
          ],
        },
        contact: {
          title: "We'd Love To Hear From You!",
          description:
            "Thank you for choosing KhaKai Family Restaurant for Your Dining Experience! We're always looking to improve and make every meal special. Share your feedback, whether it’s about our food service, or cozy atmosphere, to help us serve you better.",
          form: {
            fields: ["Name", "Email", "Subject", "Message"],
            button: "Send Message",
          },
        },
      },
      footer: {
        restaurant: "KhaKai Family Restaurant",
        description:
          "Experience The Warmth of KhaKai Family Restaurant. Create Lasting Memories. Connect With Us For More Info!",
        hours: {
          title: "Opening Hours",
          items: [
            { day: "Mon - Fri", time: "09:00 AM - 06:00 PM" },
            { day: "Saturday", time: "09:00 AM - 04:00 PM" },
            { day: "Sunday", time: "Closed" },
          ],
        },
        contact: {
          title: "Contact Us",
          items: [
            "543 Country Club Walk, Wake Forest, NC 27587, USA",
            "email@khaikai.com",
            "+1-209-745-1234",
          ],
        },
        follow: "Follow Us",
      },
    },
  },
  hi: {
    translation: {
      header: {
        slogan: "<1>भारत</1> का स्वाद",
        callToAction: "अब अपनी जगह आरक्षित करें",
        description:
          "KhaKai Family Restaurant के गर्मजोशी भरे माहौल में कदम रखें, जो आपके लिए पारिवारिक मित्रवत स्थान है, जिसमें क्लासिक आरामदायक भोजन से लेकर एक स्वागत योग्य वातावरण है जो हर भोजन को आपके और आपके परिवार के लिए विशेष अवसर बनाता है।",
        button: "मेनू देखें",
      },
      sections: {
        categories: {
          title: "श्रेणियाँ",
          items: {
            biryani: "बिरयानी बोनान्जा",
            mutton: "मटन स्पेशल",
            description:
              "सभी बिरयानी/मटन प्रेमियों के लिए सबसे पसंदीदा व्यंजन! स्वाद और विविधता!",
          },
        },
        specialDishes: {
          title: "हमारे विशेष व्यंजन",
          items: {
            pizza: "इटालियन चीज़ बेक्ड मार्गरिता पिज़्ज़ा ताजा तुलसी",
            sushi: "रोल सुशी",
            price: "₹299",
          },
        },
        gallery: {
          title: "गैलरी",
          items: [
            "खाना और पेय",
            "बाहरी और भंडारण",
            "माहौल और आंतरिक",
            "कर्मचारी और सेवा",
          ],
        },
        contact: {
          title: "हम आपकी प्रतिक्रिया सुनना चाहते हैं!",
          description:
            "KhaKai Family Restaurant को चुनने के लिए धन्यवाद! हम हमेशा सुधार करने और हर भोजन को विशेष बनाने की कोशिश करते हैं। अपनी प्रतिक्रिया साझा करें, चाहे वह हमारे भोजन सेवा या आरामदायक माहौल के बारे में हो, ताकि हम आपकी बेहतर सेवा कर सकें।",
          form: {
            fields: ["नाम", "ईमेल", "विषय", "संदेश"],
            button: "संदेश भेजें",
          },
        },
      },
      footer: {
        restaurant: "KhaKai Family Restaurant",
        description:
          "KhaKai Family Restaurant की गर्मजोशी का अनुभव करें। स्मरणीय पल बनाएँ। अधिक जानकारी के लिए हमारे साथ जुड़ें!",
        hours: {
          title: "खुलने का समय",
          items: [
            { day: "सोम - शुक्र", time: "09:00 AM - 06:00 PM" },
            { day: "शनिवार", time: "09:00 AM - 04:00 PM" },
            { day: "रविवार", time: "बंद" },
          ],
        },
        contact: {
          title: "संपर्क करें",
          items: [
            "543 कंट्री क्लब वॉक, वेक फॉरेस्ट, NC 27587, USA",
            "email@khaikai.com",
            "+1-209-745-1234",
          ],
        },
        follow: "हमारा अनुसरण करें",
      },
    },
  },
  bn: {
    translation: {
      header: {
        slogan: "<1>ভারতের</1> স্বাদ",
        callToAction: "এখন আপনার জায়গা বুক করুন",
        description:
          "KhaKai Family Restaurant-এর উষ্ণ পরিবেশে আসুন, যা আপনার জন্য একটি পরিবার-বান্ধব স্থান, যেখানে ক্লাসিক আরামদায়ক খাবার থেকে শুরু করে একটি স্বাগতম মনোভাব যা প্রতিটি খাবারকে আপনি ও আপনার পরিবারের জন্য বিশেষ করে তুলে ধরে।",
        button: "মেনু দেখুন",
      },
      sections: {
        categories: {
          title: "শ্রেণীবিভাগ",
          items: {
            biryani: "বিরিয়ানি বোনানজা",
            mutton: "মাটন স্পেশাল",
            description:
              "সব বিরিয়ানি/মাটন প্রেমীদের জন্য সবচেয়ে জনপ্রিয় খাবার! স্বাদ ও বৈচিত্র্য!",
          },
        },
        specialDishes: {
          title: "আমাদের বিশেষ খাবার",
          items: {
            pizza: "ইতালিয়ান চিজ বেকড মার্গারিটা পিজ্জা তাজা তুলসী",
            sushi: "রোল সুশি",
            price: "₹299",
          },
        },
        gallery: {
          title: "গ্যালারি",
          items: [
            "খাবার এবং পানীয়",
            "বাহিরের দৃশ্য এবং স্টোরেজ",
            "আমন্ত্রণ এবং অভ্যন্তর",
            "কর্মী এবং সেবা",
          ],
        },
        contact: {
          title: "আমরা আপনার কথা শুনতে চাই!",
          description:
            "KhaKai Family Restaurant-কে বেছে নেওয়ার জন্য ধন্যবাদ! আমরা সবসময় উন্নতি করতে এবং প্রতিটি খাবারকে বিশেষ করে তুলতে চেষ্টা করি। আপনার প্রতিক্রিয়া শেয়ার করুন, যদি তা আমাদের খাবার পরিষেবা বা আরামদায়ক পরিবেশ সম্পর্কিত হয়, যাতে আমরা আপনাকে আরও ভালো সেবা দিতে পারি।",
          form: {
            fields: ["নাম", "ইমেইল", "বিষয়", "বার্তা"],
            button: "বার্তা পাঠান",
          },
        },
      },
      footer: {
        restaurant: "KhaKai Family Restaurant",
        description:
          "KhaKai Family Restaurant-এর উষ্ণতা অনুভব করুন। স্মরণীয় মুহূর্ত তৈরি করুন। আরও তথ্যের জন্য আমাদের সাথে যোগাযোগ করুন!",
        hours: {
          title: "খোলার সময়",
          items: [
            { day: "সোম - শুক্র", time: "09:00 AM - 06:00 PM" },
            { day: "শনিবার", time: "09:00 AM - 04:00 PM" },
            { day: "রবিবার", time: "বন্ধ" },
          ],
        },
        contact: {
          title: "যোগাযোগ করুন",
          items: [
            "543 কান্ট্রি ক্লাব ওয়াক, ওয়েক ফরেস্ট, NC 27587, USA",
            "email@khaikai.com",
            "+1-209-745-1234",
          ],
        },
        follow: "আমাদের ফলো করুন",
      },
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en", // Default language
    interpolation: {
      escapeValue: false, // React handles XSS
    },
  });

export default i18n;
