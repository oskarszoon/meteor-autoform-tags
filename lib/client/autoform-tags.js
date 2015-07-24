AutoForm.addInputType('tags', {
    template: 'autoformTags',
    valueOut: function () {
        return this.val();
    },
    valueConverters: {
        stringArray: function (value) {
            return value.split(',');
        }
    }
});

Template.autoformTags.rendered = function () {
    var self;
    self = this.$('.js-input');
    self.closest('form').on('reset', function () {
        return self.tagsinput('removeAll');
    });
    return self.tagsinput(this.data.atts);
};

Template.autoformTags.helpers({
    schemaKey: function () {
        return this.atts['data-schema-key'];
    }
});