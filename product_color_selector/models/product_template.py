from odoo import models, fields

class ProductTemplate(models.Model):
    _inherit = 'product.template'

    product_color = fields.Selection([
        ('red', 'Red'),
        ('blue', 'Blue'),
        ('green', 'Green'),
        ('yellow', 'Yellow'),
        ('black', 'Black'),
        ('white', 'White')
    ], string='Product Color', default='white')