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

Start the task with

.. code-block:: javascript

    > repeater.start()

Similarly, pause and resume the task with

.. code-block:: javascript

    > repeater.pause()
    > repeater.resume()
