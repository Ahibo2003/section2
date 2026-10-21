const Feature = document.querySelector("#Feature");
// 🚀 انظري هنا: وضعنا مسافة (Space) بعد الـ Feature ليفهم المتصفح أن الديف يعيش بداخل الأب!
const featureMenu = document.querySelector("#Feature .dropdown-content"); 

const Company=document.querySelector("#Company");
const CompanyMenu = document.querySelector("#Company .dropdown-content"); 
Feature.addEventListener("click", (e) => {
  e.preventDefault();
  featureMenu.classList.toggle("show");
});
Company.addEventListener("click", (e) => {
  e.preventDefault();
  CompanyMenu.classList.toggle("show");
});