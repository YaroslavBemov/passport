<?php

namespace Database\Factories;

use App\Models\Journal;
use Illuminate\Database\Eloquent\Factories\Factory;

class JournalFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Journal::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'program_id' => mt_rand(1, 30),
            'chip' => $this->getRandomString(2) . $this->getRandomInt(3),
            'remark' => $this->faker->sentence($nbWords = 6, $variableNbWords = true),
            'creator_id' => 2,
            'fixer_id' => 2
        ];
    }

    protected function getRandomString($length = 2) {
        $characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $string = '';

        for ($i = 0; $i < $length; $i++) {
            $string .= $characters[mt_rand(0, strlen($characters) - 1)];
        }

        return $string;
    }

    protected function getRandomInt($length = 3) {
        $characters = '0123456789';
        $string = '';

        for ($i = 0; $i < $length; $i++) {
            $string .= $characters[mt_rand(0, strlen($characters) - 1)];
        }

        return $string;
    }
}
