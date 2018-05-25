Repeater
========

A `Repeater` is used to repeat a task at some interval, with the added ability to suspend repetition until resumed.

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

By default, this will repeat every 5 seconds. To change the interval, specify it in the Repeater

.. code-block:: javascript

    > const repeater = new Repeater(tick, 1000)

The task can be paused and resumed with

.. code-block:: javascript

    > repeater.pause()
    > repeater.resume()
