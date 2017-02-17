function BasicSalary() {
    var SalaryPay = document.getElementById('pay').value;
    var BP = SalaryPay * 40 / 100;
    var HRA = BP * 40 / 100;
    var PF = BP * 12.5 / 100;
    var GR = BP * 7.5 / 100;
    var SpecialAllowance = SalaryPay - BP - HRA - PF - GR;
    var total = BP + HRA + PF + GR + SpecialAllowance;
    var monthly = total / 12;
    document.getElementById('year_basic').innerHTML = BP;
    document.getElementById('year_hra').innerHTML = HRA;
    document.getElementById('year_pf').innerHTML = PF;
    document.getElementById('year_gr').innerHTML = GR;
    document.getElementById('year_SalaryPay').innerHTML = SalaryPay;
    document.getElementById('month_basic').innerHTML = parseInt(BP / 12);
    document.getElementById('month_hra').innerHTML = parseInt(HRA / 12);
    document.getElementById('month_pf').innerHTML = parseInt(PF / 12);
    document.getElementById('month_gr').innerHTML = parseInt(GR / 12);
    document.getElementById('month_SalaryPay').innerHTML = parseInt(SalaryPay / 12);
}

function empDetails() {
    var arr = [{
        "id": "2435",
        "name": "Pramod",
        "designation": "UI Developer"
    }, {
        "id": "2465",
        "name": "Dilip",
        "designation": "UI Developer"
    }, {
        "id": "2766",
        "name": "Ankan",
        "designation": "Backend Developer"
    }];
    var tdata = '';
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i].name);
        tdata += '<tr><td>' + arr[i].id + '</td><td>' + arr[i].name + '</td><td>' + arr[i].designation + '</td></tr>';
    }
    document.getElementById("tdata").innerHTML = tdata;
}
