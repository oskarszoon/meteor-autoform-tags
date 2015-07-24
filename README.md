Autoform tags
============

Forked from yogiben:autoform-tags and ahmetcetin:autoform-tags, added support placeholder and updated bootstrap-tagsinput.

Tags input for autoForm and bootstrap with [bootstrap-tagsinput](http://timschlechter.github.io/bootstrap-tagsinput/examples/). 

###Setup###
1) Install `meteor add loftsteinn:autoform-tags`

2) Define your schema and set the `autoform` property like in the example below
```
Entries = new Mongo.Collection('entries');
Profiles.attachSchema(new SimpleSchema({
    title: {
        type: String
    },
    tags: {
        type: [String] # or String,
        autoform: {
            type: 'tags',
            afFieldInput: {
                # bootstrap-tagsinput options
            }    
        }
    }
});
```

3) Generate the form with `{{> quickform}}` or `{{#autoform}}`

e.g.
```
{{> quickForm collection="Entries" type="insert"}}
```

or

```
{{#autoForm collection="Entries" type="insert"}}
    {{> afQuickField name="title"}}
    {{> afQuickField name="tags"}}
    <button type="submit" class="btn btn-primary">Insert</button>
{{/autoForm}}
```

Tags will be an array of strings if field type is `[String]` or comma separated string if field type is `String`.

###Options###

		console.log @data.atts
See all supported bootstrap-tagsinput options [here](http://timschlechter.github.io/bootstrap-tagsinput/examples/#options).
