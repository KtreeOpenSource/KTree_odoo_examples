/** @odoo-module **/
import { _t } from "@web/core/l10n/translation";
import { registry } from "@web/core/registry";
import { Component } from "@odoo/owl";
import { Field } from "@web/views/fields/field";
import { standardFieldProps } from "@web/views/fields/standard_field_props";

export class ColorSelectorField extends Component {
    static template = "custom_module.ColorSelector";
    static components = {};
    static props = {
        ...standardFieldProps,
        name: { type: String },
        record: { type: Object },
        readonly: { type: Boolean, optional: true },
        value: { optional: true },
    };

    setup() {
        this.colors = [
            { value: 'red', label: _t('Red'), color: '#FF0000' },
            { value: 'blue', label: _t('Blue'), color: '#0000FF' },
            { value: 'green', label: _t('Green'), color: '#008000' },
            { value: 'yellow', label: _t('Yellow'), color: '#FFFF00' },
            { value: 'black', label: _t('Black'), color: '#000000' },
            { value: 'white', label: _t('White'), color: '#FFFFFF' },
        ];
    }

    get selectedColor() {
        // Get the current value directly from the record
        return this.props.record.data[this.props.name] || 'white';
    }

    async onColorClick(color) {
        if (!this.props.readonly) {
            try {
                this.env.services.ui.block();
                await this.props.record.update({ [this.props.name]: color });
                await this.props.record.save({
                    stayInEdition: true,
                    noReload: true
                });
            } catch (error) {
                this.env.services.notification.notify({
                    title: _t("Error"),
                    message: _t("Failed to update color"),
                    type: "danger",
                });
                console.error("Error updating product color:", error);
            } finally {
                this.env.services.ui.unblock();
            }
        }
    }
}

export const colorSelector = {
    component: ColorSelectorField,
    supportedTypes: ["selection"],
    extractProps: ({ attrs, field }) => ({
        name: field.name,
    }),
};

registry.category("fields").add("color_selector", colorSelector);