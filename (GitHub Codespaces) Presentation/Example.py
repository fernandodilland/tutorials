import datetime

fecha_actual = datetime.date.today()
AñoNacimiento = input(f"Ingrese su fecha de nacimiento con el siguiente formato: Dia/Mes/Año: \n")
AñoNacimientoP = datetime.datetime.strptime(AñoNacimiento, "%d/%m/%Y").date()
Edad = fecha_actual.year - AñoNacimientoP.year
print (f"Su edad es la siguiente: ", Edad)

if (AñoNacimientoP.month <= fecha_actual.month) and (AñoNacimientoP.day <= fecha_actual.day):
    print ("¡Usted ya cumpluo años este año!")
else:
    print("¡Usted aun no cumple años este año!")