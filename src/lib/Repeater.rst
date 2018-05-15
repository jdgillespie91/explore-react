Repeater
========

A `Repeater` is used to repeat a task every five seconds, with the added ability to suspend repetition until resumed.

Usage
-----

Suppose we have the following task

.. code-block:: javascript

    > const tick = () => console.log('tock')

We instantiate the `Repeater` with

.. code-block:: javascript

    > const repeater = new Repeater(tick)

This will begin the task automatically. Then we may pause and resume the task with

.. code-block:: javascript

    > repeater.pause()
    > repeater.resume()
