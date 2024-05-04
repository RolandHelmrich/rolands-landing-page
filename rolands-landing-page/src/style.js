const styles = {
    boxWidth: "xl:max-w-[1280px] w-full",
  
    heading1: "inline-block font-librefranklin font-semibold ss:text[72px] text-[52px] ss:leading-[100px] leading-[75px] bg-gradient-to-r from-myBlue to-myLiBlue bg-clip-text text-transparent",

    heading2: "font-librefranklin font-semibold xs:text-[36px] text-[24px] xs:leading-[76.8px] leading-[66.8px] bg-gradient-to-r from-myAmber to-gold4 bg-clip-text text-transparent",

    paragraph: "font-librefranklin font-normal text-[18px] leading-[30.8px] text-myGrey",
  
    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",
    flexEnd: "flex justify-center items-end",
  
    paddingX: "sm:px-16 px-6",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-16 px-6 sm:py-12 py-4",
  
    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",
  };

  const _styles_2 = {
    boxWidth: "xl:max-w-[1280px] w-full",
  
    heading1: "inline-block font-librefranklin font-semibold ss:text[72px] text-[52px] ss:leading-[100px] leading-[75px] bg-gradient-to-r from-yellow-200 to-yellow-500 bg-clip-text text-transparent",

    heading2: "font-librefranklin font-semibold xs:text-[36px] text-[24px] xs:leading-[76.8px] leading-[66.8px]",
    paragraph: "font-librefranklin font-normal text-[18px] leading-[30.8px]",
  };
  
  export const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY}`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,
  
    sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
  
    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
  };
  
  export default styles;
  
  {/**
    heading1: "inline-block font-librefranklin font-semibold ss:text[72px] text-[52px] ss:leading-[100px] leading-[75px] bg-gradient-to-r from-myAmber to-gold4 bg-clip-text text-transparent",

    heading2: "font-librefranklin font-semibold xs:text-[36px] text-[24px] xs:leading-[76.8px] leading-[66.8px] bg-gradient-to-r from-myAmber to-gold4 bg-clip-text text-transparent",
 */}