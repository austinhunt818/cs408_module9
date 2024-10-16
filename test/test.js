import { Ball, loop, addBall, h2, removeBalls, EvilCircle } from '../js/main.js';

QUnit.module('EvilCircle', function() {

    QUnit.test('EvilCircle should remove a ball upon collision', function(assert) {
        var ball = new Ball(50, 50, 2, 2, 'rgb(255, 0, 0)', 10);
        var evilCircle = new EvilCircle(100, 100); 

        // Assert initial condition
        assert.ok(ball.exists, "The ball exists before collision");

        removeBalls();
        addBall(ball);
        ball.x += 50;
        ball.y += 50;
        evilCircle.collisionDetect();

        // Assert ball doesn't exist
        assert.notOk(ball.exists, "The ball no longer exists after collision");
    });

    QUnit.test('Win message displays when 0 balls are present', function(assert) {
        var ball = new Ball(50, 50, 2, 2, 'rgb(255, 0, 0)', 10);
        var evilCircle = new EvilCircle(100, 100);

        // Assert initial condition
        assert.ok(ball.exists, "The ball exists before collision");

        removeBalls();
        addBall(ball);
        ball.x += 50;
        ball.y += 50;
        evilCircle.collisionDetect();
        loop();

        // Assert ball doesn't exist
        assert.equal(h2.style.visibility, "visible");
    });

});