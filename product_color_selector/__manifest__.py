{
    'name': 'Product Color Selector',
    'version': '1.0',
    'depends': ['product'],
    'data' : [
        'views/product_template_views.xml'
    ],
    'assets': {
        'web.assets_backend': [
            'product_color_selector/static/src/components/color_selector/color_selector.js',
            'product_color_selector/static/src/components/color_selector/color_selector.xml',
            'product_color_selector/static/src/components/color_selector/color_selector.scss',
        ],
    },

    'sequence': 1,
}