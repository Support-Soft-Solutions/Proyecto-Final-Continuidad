function calcular() {
            var salario = parseFloat(document.getElementById('salario').value);
            var porcentajeIVA = parseFloat(document.getElementById('iva').value);
            var salarioConIVA = salario + (salario * porcentajeIVA);
            var salarioMenosIVA = salarioConIVA - salario;
            document.getElementById('resultado').value = salarioConIVA.toFixed(2);
            document.getElementById('salario-iva').value = salarioMenosIVA.toFixed(2);
        }