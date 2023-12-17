from django.db import models

class Dev(models.Model):
    idDev = models.AutoField(primary_key=True)
    nomeCompleto = models.CharField(max_length=100)
    primeiroNome = models.CharField(max_length=20)
    sobrenome = models.CharField(max_length=20)
    dtNasc = models.DateField()
    sexo = models.CharField(max_length=15)
    email = models.CharField(max_length=100)
    
    class Meta:
        db_table = 'dev'

    def __str__(self):
        return self.nomeCompleto