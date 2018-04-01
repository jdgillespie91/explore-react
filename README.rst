explore-react
=============

The front-end app that is `my exploration into React`__.

.. _app: http://ui.jakegillespie.me.s3-website.eu-west-2.amazonaws.com/

__ app_

Idea
----

The aim is to implement the Warcraft III interface in React. For now, I'm concentrating on functionality and flow. Styling might come later...

Usage
-----

Run the app in development mode with

.. code-block:: bash

  $ yarn start

Development
-----------

*Requires awscli*

Infrastructure
~~~~~~~~~~~~~~

Create the infrastructure using the templates in the infra_ folder. For example, create the resources from scratch with

.. code-block:: bash

    $ aws cloudformation create-stack --stack-name explore-react-resources --template-body file://infra/resources.yml

Update an existing set of resources with

.. code-block:: bash

    $ aws cloudformation create-change-set --stack-name explore-react-resources --template-body file://infra/resources.yml --change-set-name explore-react-resources-cs-1
    $ aws cloudformation execute-change-set --stack-name explore-react-resources --change-set-name explore-react-resources-cs-1

.. _infra: infra

Certificates
------------

Certificates are managed via `Let's Encrypt`__. To renew, use `this guide`__ (there might be a better way). Note that certbot_ is the local binary that should be used.

.. _le: https://letsencrypt.org/
.. _guide: https://www.codeword.xyz/2016/01/06/lets-encrypt-a-static-site-on-amazon-s3/
.. _certbot: https://certbot.eff.org/

__ le_
__ guide_
