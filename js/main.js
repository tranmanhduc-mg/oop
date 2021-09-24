const txtName = document.querySelector("#fullname");
const txtEmail = document.querySelector("#email");
const txtPhone = document.querySelector("#phone");
const txtAddress = document.querySelector("#address");
const txtGender = document.querySelectorAll("#gender");

const btnAdd = document.querySelector(".add");

(function () {
  txtName.onchange = (e) => {
    const name = e.target.value;
    Add(name);
  };
  txtEmail.onchange = (e) => {
    const email = e.target.value;
    Add(email);
  };
  txtPhone.onchange = (e) => {
    const phone = e.target.value;
    Add(phone);
  };
  txtAddress.onchange = (e) => {
    const addr = e.target.value;
    Add(addr);
  };
  txtGender.forEach((item) => {
    item.onclick = (e) => {
      const sex = e.target.value;
      //   Add(sex);
    };
  });
})();

const Add = async (value) => {
  btnAdd.onclick = (e) => {
    e.preventDefault();
    console.log(value);
  };
};
