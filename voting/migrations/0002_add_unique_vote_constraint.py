# Generated manually to add unique constraint on Votes model

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('voting', '0001_initial'),
    ]

    operations = [
        migrations.AlterUniqueTogether(
            name='votes',
            unique_together={('voter', 'position')},
        ),
    ]

