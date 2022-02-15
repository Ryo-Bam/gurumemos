<?php

namespace Database\Seeders;

use App\Models\QuestionCategory;
use Illuminate\Database\Seeder;

class QuestionCategoryTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $categories=['時間', '場所', '料金'];
        foreach($categories as $category) {
            QuestionCategory::create([
                'category'=>$category
            ]);
        }
    }
}
