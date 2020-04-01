---
title: Registration
published: true
anchors:
    active: false
tagtitle: h2
visible: false
form:
    fields:
        fullname:
            type: text
            validate:
                required: true
        username:
            type: text
            validate:
                required: true
                message: PLUGIN_LOGIN.USERNAME_NOT_VALID
                config-pattern@: system.username_regex
        email:
            type: email
            validate:
                required: true
                message: PLUGIN_LOGIN.EMAIL_VALIDATION_MESSAGE
        password1:
            type: password
            label: 'Enter a password'
            validate:
                required: true
                message: PLUGIN_LOGIN.PASSWORD_VALIDATION_MESSAGE
                config-pattern@: system.pwd_regex
        password2:
            type: password
            label: 'Enter the password again'
            validate:
                required: true
                message: PLUGIN_LOGIN.PASSWORD_VALIDATION_MESSAGE
                config-pattern@: system.pwd_regex
        groups:
            type: select
            label: 'Access Group'
            classes: fancy
            options:
                registered: 'Only Login'
                moderator: Moderator
                team: Team
                partner: Partner
                client: Customer
            validate:
                required: true
    buttons:
        -
            type: reset
            value: Reset
        -
            type: submit
            value: Submit
            classes: btn-primary
    process:
        register_user: true
        message: 'Obrigado por realizar o registro...'
        reset: true
---

