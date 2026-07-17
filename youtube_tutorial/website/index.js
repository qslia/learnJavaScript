function calculate() {
    const totalAmount = document.getElementById("total-amount");
    const principalInput = document.getElementById("principal");
    const rateInput = document.getElementById("rate");
    const yearsInput = document.getElementById("years");

    let principal = Number(principalInput.value);
    let rate = Number(rateInput.value / 100);
    let years = Number(yearsInput.value);

    if (principal < 0 || isNaN(principal)) {
        principal = 0;
        principalInput.value = 0;
    }
    if (rate < 0 || isNaN(rate)) {
        rate = 0;
        rateInput.value = 0;
    }
    if (years < 0 || isNaN(years)) {
        years = 0;
        yearsInput.value = 0;
    }

    const result = principal * Math.pow((1 + rate / 1), 1 * years);

    totalAmount.textContent = result.toLocaleString("en-US", {style: "currency", currency: "USD"});

// undefined 表示使用系统默认区域设置（通常是浏览器的语言环境）
// 如果你的浏览器语言不是英语（美国），系统不确定该显示 $ 还是 USD，于是同时显示两者作为后备方案
}


