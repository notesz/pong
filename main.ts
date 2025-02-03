let x_min = 0
let y_min = 0
let x_max = 0
let y_max = 0
let position_x = 0
let position_y = 0
let direction_x = 0
let direction_y = 0
let speed = 0
input.onButtonPressed(Button.B, function () {
    x_min = 0
    y_min = 0
    x_max = 4
    y_max = 4
    position_x = randint(x_min, x_max)
    position_y = randint(y_min, y_max)
    direction_x = 1
    direction_y = 1
    speed = 1
    while (true) {
        if (input.buttonIsPressed(Button.B)) {
            break;
        }
        speed = speed + 2
        led.plot(position_x, position_y)
        basic.pause(speed)
        led.unplot(position_x, position_y)
        position_x = position_x + direction_x
        position_y = position_y + direction_y
        if (position_x <= x_min) {
            direction_x = 1
            position_x = x_min
            music.play(music.createSoundExpression(WaveShape.Sawtooth, 518, 2098, 255, 0, 30, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        }
        if (position_x >= x_max) {
            direction_x = -1
            position_x = x_max
            music.play(music.createSoundExpression(WaveShape.Sawtooth, 518, 2098, 255, 0, 30, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        }
        if (position_y <= x_min) {
            direction_y = 1
            position_y = x_min
            music.play(music.createSoundExpression(WaveShape.Sawtooth, 518, 2098, 255, 0, 30, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        }
        if (position_y >= y_max) {
            direction_y = -1
            music.play(music.createSoundExpression(WaveShape.Sawtooth, 518, 2098, 255, 0, 30, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
            position_y = y_max
        }
    }
})
